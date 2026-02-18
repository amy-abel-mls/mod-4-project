const genreCarousel = document.querySelector('.genreCarousel');
const modalBody = document.querySelector('#modal-body');
const searchResultsSection = document.querySelector('#search-results-section');
const searchResults = document.querySelector('#search-results');

export const renderBooksGenre = (books) => {
  const ul = document.createElement('ul');
  books.data[0].works.forEach((book, i) => {
    const li = document.createElement('li');
    li.dataset.bookKey = book.key;

    const img = document.createElement('img');
    img.src = books.data[1][i];
    img.alt = book.title;

    const h3 = document.createElement('h3');
    h3.textContent = book.title;

    li.append(img, h3);
    ul.append(li);
    genreCarousel.append(ul);
  });
};

export const renderBookDetails = (book) => {
  modalBody.innerHTML = '';

  const img = document.createElement('img');
  img.src = book.data[1].covers[0];
  img.alt = book.data[0].title;

  const h3 = document.createElement('h3');
  h3.textContent = book.data[0].title;

  const p = document.createElement('p');
  p.textContent = book.data[0].description;

  li.append(img, h3);
  modalBody.append(li);
};

export const renderBooksSearch = (books) => {
  searchResultsSection.classList.remove('hidden');
  searchResultsSection.removeAttribute('hidden');

  searchResults.innerHTML = '';

  books.data[0].works.forEach((book, i) => {
    const li = document.createElement('li');
    li.dataset.bookKey = book.key;

    const img = document.createElement('img');
    img.src = books.data[1][i];
    img.alt = book.title;

    const h3 = document.createElement('h3');
    h3.textContent = book.title;

    li.append(img, h3);
    searchResults.append(li);
  });
};
