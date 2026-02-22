/* =====================================================
   FETCH HELPERS
   -----------------------------------------------------
   These functions are responsible ONLY for:
   - Communicating with the Open Library API
   - Returning raw data in a consistent format
   - Handling errors safely

   They do NOT:
   - Manipulate the DOM
   - Control UI state
   - Handle user interactions
   ===================================================== */

/* =====================================================
   GET BOOKS BY GENRE / SUBJECT
   -----------------------------------------------------
   - Fetches a list of books for a given genre or subject
   - Used for:
     • Initial genre-based browsing
     • Recommendations
     • Random book feature
   - Returns both the raw API data and an array of
     cover image URLs
   ===================================================== */
export const getGenres = async (genre) => {
  try {
<<<<<<< feature/css
    const response = await fetch(`https://openlibrary.org/subjects/${genre}.json`);
=======
    const response = await fetch(
      `https://openlibrary.org/subjects/${genre}.json`,
    );
>>>>>>> main

    if (!response.ok) {
      throw Error(`Fetch failed. ${response.status} ${response.statusText}`);
    }

    const data = await response.json();

    // Build a list of cover image URLs for each book
    // Some books may not have covers (handled later in the UI)
    let cover = [];
    for (const work of data.works) {
<<<<<<< feature/css
      cover.push(`https://covers.openlibrary.org/b/olid/${work.cover_edition_key}-L.jpg`);
=======
      cover.push(
        `https://covers.openlibrary.org/b/olid/${work.cover_edition_key}-L.jpg`,
      );
>>>>>>> main
    }

    return { data: [data, cover], error: null };
  } catch (error) {
    console.log(error.message);
    return { data: null, error };
  }
};

/* =====================================================
   GET SINGLE BOOK DETAILS
   -----------------------------------------------------
   - Fetches detailed information for one book
   - Used when:
     • A user clicks on a book
     • A random book is selected
   - Provides richer metadata such as:
     • Description
     • Subjects
     • Additional cover information
   ===================================================== */
export const getSingleBook = async (key) => {
  try {
    const response = await fetch(`https://openlibrary.org${key}.json`);

    if (!response.ok) {
      throw Error(`Fetch failed. ${response.status} ${response.statusText}`);
    }

    const data = await response.json();

    // Build the cover image URL using the cover ID
    const cover = `https://covers.openlibrary.org/b/id/${data.covers[0]}-L.jpg`;

    return { data: [data, cover], error: null };
  } catch (error) {
    console.log(error.message);
    return { data: null, error };
  }
};

/* =====================================================
   SEARCH BOOKS
   -----------------------------------------------------
   - Fetches search results based on user input
   - Used for the main search feature
   - Returns:
     • A list of matching books
     • A corresponding list of cover image URLs
   - Handles cases where some books do not have
     cover images
   ===================================================== */
export const searchBooks = async (query) => {
  try {
<<<<<<< feature/css
    const response = await fetch(`https://openlibrary.org/search.json?q=${query}&sort=rating`);
=======
    const response = await fetch(
      `https://openlibrary.org/search.json?q=${query}&sort=rating`,
    );
>>>>>>> main

    if (!response.ok) {
      throw Error(`Fetch failed. ${response.status} ${response.statusText}`);
    }

    const data = await response.json();

    // Build cover image URLs using the search-specific cover ID
    // Some results may not include a cover
    let cover = [];
    for (const doc of data.docs) {
<<<<<<< feature/css
      cover.push(doc.cover_i ? `https://covers.openlibrary.org/b/id/${doc.cover_i}-L.jpg` : null);
=======
      cover.push(
        doc.cover_i
          ? `https://covers.openlibrary.org/b/id/${doc.cover_i}-L.jpg`
          : null,
      );
>>>>>>> main
    }

    return { data: [data, cover], error: null };
  } catch (error) {
    console.error(error.message);
    return { data: null, error };
  }
};
