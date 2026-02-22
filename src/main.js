/* =====================================================
   IMPORTS
   -----------------------------------------------------
   - Fetch helpers handle all communication with the
     Open Library API
   - DOM helpers are responsible only for creating
     and updating HTML elements on the page
   ===================================================== */
import { getGenres, searchBooks, getSingleBook } from './fetch-helpers.js';
import {
  renderBooksGenre,
  renderBooksSearch,
  renderBookDetails,
  renderRecommendedBooks,
} from './dom-helpers.js';

/* =====================================================
   DOM REFERENCES
   -----------------------------------------------------
   These references allow main.js to:
   - Control which sections are visible
   - Listen for user interactions
   - Open and close the modal
   ===================================================== */
const genreSections = document.querySelectorAll('.genre-row');
const genresSection = document.querySelector('#genres-section');

const searchForm = document.querySelector('#search-form');
const searchInput = document.querySelector('#search-input');

const modalOverlay = document.querySelector('#modal-overlay');
const closeModalBtn = document.querySelector('#close-modal-btn');

const randomBookBtn = document.querySelector('#random-book-btn');

/* =====================================================
   CONSTANTS
   -----------------------------------------------------
   Since Open Library does not provide a true "random"
   book endpoint, this list is used to simulate randomness
   by selecting a random genre first
   ===================================================== */
const RANDOM_GENRES = [
  'fantasy',
  'science_fiction',
  'romance',
  'thriller',
  'mystery',
  'historical_fiction',
];

/* =====================================================
   INITIAL GENRE LOAD (DISCOVERY MODE)
   -----------------------------------------------------
   - Runs once when the page loads
   - Fetches books for each predefined genre
   - Populates the horizontal carousels users see first
   ===================================================== */
const loadGenres = async () => {
  for (const section of genreSections) {
    const genre = section.dataset.genre;
    const container = section.querySelector('ul');

    const books = await getGenres(genre);
    if (!books.error) {
      renderBooksGenre(books, container);
    }
  }
};

/* =====================================================
   SEARCH FEATURE
   -----------------------------------------------------
   - Handles user-submitted searches
   - Hides genre discovery content
   - Displays search results
   - Triggers recommendation generation
   ===================================================== */
const handleSearch = async (e) => {
  e.preventDefault();

  const query = searchInput.value.trim();
  if (!query) return;

  // Hide genre-based browsing when a search is active
  genresSection.hidden = true;

  const books = await searchBooks(query);
  if (!books.error) {
    renderBooksSearch(books);
    getRecommendationsFromSearch(books);
  }
};

/* =====================================================
   RECOMMENDATIONS FEATURE
   -----------------------------------------------------
   - Uses the top search result as a reference point
   - Analyzes its subject metadata
   - Fetches books related by shared themes
   - Displays recommendations in a separate section
   ===================================================== */
const getRecommendationsFromSearch = async (searchResults) => {
  // Use the first search result as the "seed" book
  const seedBook = searchResults.data[0].docs[0];
  if (!seedBook?.key) return;

  // Fetch full book data to access richer metadata
  const fullBook = await getSingleBook(seedBook.key);
  if (fullBook.error) return;

  const subjects = fullBook.data[0].subjects;
  if (!subjects || !subjects.length) return;

  // Select one subject to base recommendations on
  const subject = subjects[Math.floor(Math.random() * subjects.length)]
    .toLowerCase()
    .replace(/\s+/g, '_');

  const recommended = await getGenres(subject);
  if (!recommended.error) {
    renderRecommendedBooks(recommended);
  }
};

/* =====================================================
   RANDOM BOOK FEATURE
   -----------------------------------------------------
   - Simulates randomness by:
     1. Choosing a random genre
     2. Selecting a random book within that genre
   - Displays the result in the same modal used
     for all book details
   ===================================================== */
const handleRandomBook = async () => {
  const randomGenre = RANDOM_GENRES[Math.floor(Math.random() * RANDOM_GENRES.length)];

  const genreBooks = await getGenres(randomGenre);
  if (genreBooks.error) return;

  const works = genreBooks.data[0].works;
  if (!works.length) return;

  const randomWork = works[Math.floor(Math.random() * works.length)];

  const book = await getSingleBook(randomWork.key);
  if (!book.error) {
    renderBookDetails(book);
    modalOverlay.hidden = false;
    document.body.style.overflow = 'hidden';
  }
};

/* =====================================================
   MODAL INTERACTIONS
   -----------------------------------------------------
   - Uses event delegation so all dynamically
     rendered books are clickable
   - Displays detailed book information
   - Allows users to close the modal
   ===================================================== */
const handleBookClick = async (e) => {
  const bookItem = e.target.closest('[data-book-key]');
  if (!bookItem) return;

  const bookKey = bookItem.dataset.bookKey;
  const book = await getSingleBook(bookKey);

  if (!book.error) {
    renderBookDetails(book);
    modalOverlay.hidden = false;
    document.body.style.overflow = 'hidden';
  }
};

const closeModal = () => {
  modalOverlay.hidden = true;
  document.body.style.overflow = 'scroll';
};

const SCROLL_AMOUNT = 300;
const handleArrowClick = (e) => {
  const arrow = e.target.closest('.arrow');
  if (!arrow) return;

  const wrapper = arrow.closest('.carousel-wrapper');
  const carousel = wrapper.querySelector('.genre-carousel, #search-results');

  if (arrow.classList.contains('arrow-left')) {
    carousel.scrollBy({ left: -SCROLL_AMOUNT, behavior: 'smooth' });
  }

  if (arrow.classList.contains('arrow-right')) {
    carousel.scrollBy({ left: SCROLL_AMOUNT, behavior: 'smooth' });
  }
};

/* =====================================================
   EVENT LISTENERS
   -----------------------------------------------------
   Connects user actions to application behavior
   ===================================================== */
searchForm.addEventListener('submit', handleSearch);
document.body.addEventListener('click', handleBookClick);
closeModalBtn.addEventListener('click', closeModal);
randomBookBtn.addEventListener('click', handleRandomBook);
document.querySelector('#genres-section').addEventListener('click', handleArrowClick);
document.querySelector('#search-results-section').addEventListener('click', handleArrowClick);
/* =====================================================
   APPLICATION START
   -----------------------------------------------------
   Kicks off the initial genre-based discovery view
   ===================================================== */
loadGenres();
