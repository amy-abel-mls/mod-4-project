import { getFavorites } from './favorites-helpers.js';
import { getSingleBook } from './fetch-helpers.js';
import { renderBookDetails } from './dom-helpers.js';
import {
  userGestures,
  onFirstGesture,
  playSound,
  musicOn,
  clickBuffer,
  pauseAudio,
  startOrResumeAudio,
} from './audio-helpers.js';

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

userGestures.forEach((e) => document.addEventListener(e, onFirstGesture));

//When window is switched the audio is always paused
window.addEventListener('blur', pauseAudio);

// When user is on app window audio is handled
window.addEventListener('focus', () => {
  if (musicOn) startOrResumeAudio();
});

document.body.addEventListener('click', (e) => {
  if (e.target.closest('button, a, #favorites-list h3') && musicOn) {
    playSound(clickBuffer, 0.01);
  }
});

// Initial render
renderFavorites();
