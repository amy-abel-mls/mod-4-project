/* =====================================================
   DOM HELPERS
   -----------------------------------------------------
   These functions are responsible for:
   - Creating HTML elements based on API data
   - Injecting content into the correct sections
   - Handling image fallbacks and empty states

   They do NOT:
   - Fetch data
   - Handle user events
   - Manage application state
   ===================================================== */

/* =====================================================
   DOM REFERENCES
   -----------------------------------------------------
   These elements are shared, single-instance sections
   that are updated dynamically as the user interacts
   with the app
   ===================================================== */
<<<<<<< feature/css
const modalBody = document.querySelector('#modal-body');
const searchResultsSection = document.querySelector('#search-results-section');
const searchResults = document.querySelector('#search-results');
const recommendedSection = document.querySelector('#recommended-section');
const recommendedResults = document.querySelector('#recommended-results');
=======
const modalBody = document.querySelector("#modal-body");
const searchResultsSection = document.querySelector("#search-results-section");
const searchResults = document.querySelector("#search-results");
const recommendedSection = document.querySelector("#recommended-section");
const recommendedResults = document.querySelector("#recommended-results");
>>>>>>> main

/* =====================================================
   RENDER GENRE BOOKS
   -----------------------------------------------------
   - Displays books within a genre carousel
   - Used on initial page load for discovery
   - Receives a container so main.js controls
     where content is rendered
   ===================================================== */
export const renderBooksGenre = (books, container) => {
  // Clear existing content before rendering
<<<<<<< feature/css
  container.innerHTML = '';
=======
  container.innerHTML = "";
>>>>>>> main

  books.data[0].works.forEach((book, i) => {
    const li = document.createElement("li");
    li.dataset.bookKey = book.key;

    // Book cover with graceful fallback
<<<<<<< feature/css
    const img = document.createElement('img');
    img.loading = 'lazy';
    img.onload = () => img.classList.add('loaded');
    img.onerror = () => {
      img.src = '/placeholder.jpg';
    };
    img.src = books.data[1][i] || '/placeholder.jpg';
    img.alt = book.title;

    // Book title
    const h3 = document.createElement('h3');
=======
    const img = document.createElement("img");
    img.onerror = () => {
      img.src = "/placeholder.jpg";
    };
    img.src = books.data[1][i] || "/placeholder.jpg";
    img.alt = book.title;

    // Book title
    const h3 = document.createElement("h3");
>>>>>>> main
    h3.textContent = book.title;

    li.append(img, h3);
    container.append(li);
  });
};

/* =====================================================
   RENDER BOOK DETAILS (MODAL)
   -----------------------------------------------------
   - Displays detailed information for a single book
   - Used for:
     • Clicking a book
     • Random book feature
   - Reuses the same modal for all book details
   ===================================================== */
export const renderBookDetails = (book) => {
  // Clear previous modal content
<<<<<<< feature/css
  modalBody.innerHTML = '';

  const bookData = book.data[0];

  //Image
  const img = document.createElement('img');
  img.loading = 'lazy';
  img.onload = () => img.classList.add('loaded');
  img.onerror = () => {
    img.src = '/placeholder.jpg';
  };
  img.src = book.data[1] || '/placeholder.jpg';
  img.alt = bookData.title;

  //Title
  const title = document.createElement('h3');
  title.textContent = bookData.title;

  //Description
  const description = document.createElement('p');
  description.textContent =
    typeof bookData.description === 'string'
      ? bookData.description
      : bookData.description?.value || 'No description available.';

  //Genres
  const genresContainer = document.createElement('div');
  genresContainer.classList.add('book-genres');

  const genresTitle = document.createElement('h4');
  genresTitle.textContent = 'Genres';

  const marqueeContainer = document.createElement('div');
  marqueeContainer.classList.add('marquee-container');

  const genresList = document.createElement('ul');
  genresList.classList.add('marquee');

  if (bookData.subjects && bookData.subjects.length) {
    bookData.subjects.slice(0, 5).forEach((subject) => {
      const li = document.createElement('li');
=======
  modalBody.innerHTML = "";

  const bookData = book.data[0];

  //Image
  const img = document.createElement("img");
  img.onerror = () => {
    img.src = "/placeholder.jpg";
  };
  img.src = book.data[1] || "/placeholder.jpg";
  img.alt = bookData.title;

  //Title
  const title = document.createElement("h3");
  title.textContent = bookData.title;

  //Description
  const description = document.createElement("p");
  description.textContent =
    typeof bookData.description === "string"
      ? bookData.description
      : bookData.description?.value || "No description available.";

  //Genres
  const genresContainer = document.createElement("div");
  genresContainer.classList.add("book-genres");

  const genresTitle = document.createElement("h4");
  genresTitle.textContent = "Genres";

  const genresList = document.createElement("ul");

  if (bookData.subjects && bookData.subjects.length) {
    bookData.subjects.slice(0, 5).forEach((subject) => {
      const li = document.createElement("li");
>>>>>>> main
      li.textContent = subject;
      genresList.appendChild(li);
    });
  } else {
<<<<<<< feature/css
    const li = document.createElement('li');
    li.textContent = 'No genres available';
    genresList.appendChild(li);
  }

  marqueeContainer.append(genresList);

  //duplicated for marquee
  const genresListCloned = genresList.cloneNode(true);
  genresListCloned.setAttribute('aria-hidden', 'true');
  marqueeContainer.append(genresListCloned);

  genresContainer.append(genresTitle, marqueeContainer);

  //Append
  modalBody.append(img, title, genresContainer, description);
=======
    const li = document.createElement("li");
    li.textContent = "No genres available";
    genresList.appendChild(li);
  }

  genresContainer.append(genresTitle, genresList);

  //Append
  modalBody.append(img, title, description, genresContainer);
>>>>>>> main
};

/* =====================================================
   RENDER SEARCH RESULTS
   -----------------------------------------------------
   - Displays books returned from a user search
   - Reveals the search results section
   - Clears previous results before rendering
   ===================================================== */
export const renderBooksSearch = (books) => {
  // Ensure search results section is visible
  searchResultsSection.hidden = false;
<<<<<<< feature/css
  searchResults.innerHTML = '';

  books.data[0].docs.forEach((book, i) => {
    const li = document.createElement('li');
    li.dataset.bookKey = book.key;

    // Book cover with fallback
    const img = document.createElement('img');
    img.loading = 'lazy';
    img.onload = () => img.classList.add('loaded');
    img.onerror = () => {
      img.src = '/placeholder.jpg';
    };
    img.src = books.data[1][i] || '/placeholder.jpg';
    img.alt = book.title;

    // Book title
    const h3 = document.createElement('h3');
=======
  searchResults.innerHTML = "";

  books.data[0].docs.forEach((book, i) => {
    const li = document.createElement("li");
    li.dataset.bookKey = book.key;

    // Book cover with fallback
    const img = document.createElement("img");
    img.onerror = () => {
      img.src = "/placeholder.jpg";
    };
    img.src = books.data[1][i] || "/placeholder.jpg";
    img.alt = book.title;

    // Book title
    const h3 = document.createElement("h3");
>>>>>>> main
    h3.textContent = book.title;

    li.append(img, h3);
    searchResults.append(li);
  });
};

/* =====================================================
   RENDER RECOMMENDED BOOKS
   -----------------------------------------------------
   - Displays books recommended based on a user's search
   - Shown below search results
   - Limits the number of recommendations to keep
     the UI focused and readable
   ===================================================== */
export const renderRecommendedBooks = (books) => {
  // Guard clause — prevents runtime crash
  if (!recommendedSection || !recommendedResults) return;

  recommendedSection.hidden = false;
<<<<<<< feature/css
  recommendedResults.innerHTML = '';

  books.data[0].works.slice(0, 8).forEach((book, i) => {
    const li = document.createElement('li');
    li.dataset.bookKey = book.key;

    const img = document.createElement('img');
    img.loading = 'lazy';
    img.onload = () => img.classList.add('loaded');
    img.onerror = () => (img.src = '/placeholder.jpg');
    img.src = books.data[1][i] || '/placeholder.jpg';
    img.alt = book.title;

    const h3 = document.createElement('h3');
=======
  recommendedResults.innerHTML = "";

  books.data[0].works.slice(0, 8).forEach((book, i) => {
    const li = document.createElement("li");
    li.dataset.bookKey = book.key;

    const img = document.createElement("img");
    img.onerror = () => (img.src = "/placeholder.jpg");
    img.src = books.data[1][i] || "/placeholder.jpg";
    img.alt = book.title;

    const h3 = document.createElement("h3");
>>>>>>> main
    h3.textContent = book.title;

    li.append(img, h3);
    recommendedResults.append(li);
  });
};
