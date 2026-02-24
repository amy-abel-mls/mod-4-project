import { getFavorites } from './favorites-helpers.js';
import { getSingleBook } from './fetch-helpers.js';
import { renderBookDetails } from './dom-helpers.js';

const list = document.querySelector('#favorites-list');

const modalOverlay = document.querySelector('.modal-overlay');
const closeModalBtn = document.querySelector('.close-modal-btn');
const modalBackdrop = document.querySelector('.modal-backdrop');

const renderFavorites = () => {
  const favorites = getFavorites();
  list.innerHTML = '';

  if (!favorites.length) {
    list.innerHTML = '<p>No saved books yet.</p>';
    return;
  }

  favorites.forEach((book) => {
    const li = document.createElement('li');
    li.dataset.bookKey = book.key;

    const img = document.createElement('img');
    img.loading = 'lazy';
    img.onload = () => img.classList.add('loaded');
    img.src = book.cover;
    img.alt = book.title;

    const title = document.createElement('h3');
    title.textContent = book.title;

    li.append(img, title);
    list.append(li);
  });
};

const handleBookClick = async (e) => {
  const bookItem = e.target.closest('[data-book-key]');
  if (!bookItem) return;

  const bookKey = bookItem.dataset.bookKey;
  const book = await getSingleBook(bookKey);

  if (!book.error) {
    renderBookDetails(book);
    modalOverlay.hidden = false;
    console.log(document.querySelector('.modal-title-container'));
    console.log(document.querySelector('.remove'));
    document.body.style.overflow = 'hidden';

    const toggleBtn = document.querySelector('.favorite-toggle-btn');

    const observer = new MutationObserver(renderFavorites);

    observer.observe(toggleBtn, {
      attributes: true,
      attributeFilter: ['class'],
    });
  }
};

const closeModal = () => {
  modalOverlay.hidden = true;
  document.body.style.overflow = 'scroll';
};

document.body.addEventListener('click', handleBookClick);
[closeModalBtn, modalBackdrop].forEach((el) => el.addEventListener('click', closeModal));

// Initial render
renderFavorites();
