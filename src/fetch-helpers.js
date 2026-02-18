export const getGenres = async (genre) => {
  try {
    const response = await fetch(`https://openlibrary.org/subjects/${genre}.json`);
    if (!response.ok) throw Error(`Fetch failed. ${response.status} ${response.statusText}`);
    const data = await response.json();
    return { data, error: null };
  } catch (error) {
    console.log(error.message);
    return { data: null, error };
  }
};

export const getSingleBook = async (key) => {
  try {
    const response = await fetch(`https://openlibrary.org${key}.json`);
    if (!response.ok) throw Error(`Fetch failed. ${response.status} ${response.statusText}`);
    const data = await response.json();
    return { data, error: null };
  } catch (error) {
    console.log(error.message);
    return { data: null, error };
  }
};

export const getBookCover = async (olid) => {
  try {
    const response = await fetch(`https://covers.openlibrary.org/b/olid/${olid}-L.jpg`);
    if (!response.ok) throw Error(`Fetch failed. ${response.status} ${response.statusText}`);
    const data = await response.json();
    return { data, error: null };
  } catch (error) {
    console.error(error.message);
    return { data: null, error };
  }
};

export const searchBooks = async (query) => {
  try {
    const response = await fetch(`https://openlibrary.org/search.json?q=${query}&sort=rating`);
    if (!response.ok) throw Error(`Fetch failed. ${response.status} ${response.statusText}`);
    const data = await response.json();
    return { data, error: null };
  } catch (error) {
    console.error(error.message);
    return { data: null, error };
  }
};
