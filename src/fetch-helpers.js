export const getGenres = async (genre) => {
  try {
    const response = await fetch(`https://openlibrary.org/search.json?q=${genre}`);
    if (!response.ok) throw Error(`Fetch failed. ${response.status} ${response.statusText}`);
    const data = await response.json();
    return { data, error: null };
  } catch (error) {
    console.log(error.message);
    return { data: null, error };
  }
};

export const getSingleBook = async (id) => {
  try {
    const response = await fetch(`https://openlibrary.org${id}.json`);
    if (!response.ok) throw Error(`Fetch failed. ${response.status} ${response.statusText}`);
    const data = await response.json();
    return { data, error: null };
  } catch (error) {
    console.log(error.message);
    return { data: null, error };
  }
};
