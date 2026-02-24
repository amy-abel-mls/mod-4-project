/* =====================================================
   FAVORITES HELPERS
   -----------------------------------------------------
   Handles saving, reading, and removing "Read Later"
   books using localStorage.
   ===================================================== */

const STORAGE_KEY = "readLater";

export const getFavorites = () =>
  JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

export const saveFavorites = (books) =>
  localStorage.setItem(STORAGE_KEY, JSON.stringify(books));

export const saveBookToFavorites = (book) => {
  const existing = getFavorites();
  if (existing.some((b) => b.key === book.key)) return;
  existing.push(book);
  saveFavorites(existing);
};

export const removeBookFromFavorites = (key) => {
  const updated = getFavorites().filter((book) => book.key !== key);
  saveFavorites(updated);
};

export const isBookSaved = (key) => {
  return getFavorites().some((book) => book.key === key);
};
