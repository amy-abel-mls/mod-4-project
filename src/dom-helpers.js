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
const modalBody = document.querySelector("#modal-body");
const searchResultsSection = document.querySelector("#search-results-section");
const searchResults = document.querySelector("#search-results");
const recommendedSection = document.querySelector("#recommended-section");
const recommendedResults = document.querySelector("#recommended-results");

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
  container.innerHTML = "";

  books.data[0].works.forEach((book, i) => {
    const li = document.createElement("li");
    li.dataset.bookKey = book.key;

    // Book cover with graceful fallback
    const img = document.createElement("img");
    img.onerror = () => {
      img.src = "/placeholder.jpg";
    };
    img.src = books.data[1][i] || "/placeholder.jpg";
    img.alt = book.title;

    // Book title
    const h3 = document.createElement("h3");
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
  modalBody.innerHTML = "";

  // Book cover
  const img = document.createElement("img");
  img.onerror = () => {
    img.src = "/placeholder.jpg";
  };
  img.src = book.data[1] || "/placeholder.jpg";
  img.alt = book.data[0].title;

  // Book title
  const h3 = document.createElement("h3");
  h3.textContent = book.data[0].title;

  // Book description (handles inconsistent API formats)
  const p = document.createElement("p");
  p.textContent =
    typeof book.data[0].description === "string"
      ? book.data[0].description
      : book.data[0].description?.value || "No description available.";

  modalBody.append(img, h3, p);
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
  // Ensure recommended section is visible
  recommendedSection.hidden = false;
  recommendedResults.innerHTML = "";

  books.data[0].works.slice(0, 8).forEach((book, i) => {
    const li = document.createElement("li");
    li.dataset.bookKey = book.key;

    // Book cover with fallback
    const img = document.createElement("img");
    img.onerror = () => (img.src = "/placeholder.jpg");
    img.src = books.data[1][i] || "/placeholder.jpg";
    img.alt = book.title;

    // Book title
    const h3 = document.createElement("h3");
    h3.textContent = book.title;

    li.append(img, h3);
    recommendedResults.append(li);
  });
};
