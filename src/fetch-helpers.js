export const getGenres = async (genre) => {
  try {
    const response = await fetch(`https://openlibrary.org/subjects/${genre}.json`);
    if (!response.ok) throw Error(`Fetch failed. ${response.status} ${response.statusText}`);
    const data = await response.json();
    let cover = [];
    for (const work of data.works)
      cover.push(`https://covers.openlibrary.org/b/olid/${work.cover_edition_key}-L.jpg`);
    return { data: [data, cover], error: null };
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
    const cover = `https://covers.openlibrary.org/b/id/${data.covers[0]}-L.jpg`;
    return { data: [data, cover], error: null };
  } catch (error) {
    console.log(error.message);
    return { data: null, error };
  }
};

export const searchBooks = async (query) => {
  try {
    const response = await fetch(`https://openlibrary.org/search.json?q=${query}&sort=rating`);
    if (!response.ok) throw Error(`Fetch failed. ${response.status} ${response.statusText}`);
    const data = await response.json();
    let cover = [];
    for (const doc of data.docs)
      cover.push(`https://covers.openlibrary.org/b/olid/${doc.cover_edition_key}-L.jpg`);
    return { data: [data, cover], error: null };
  } catch (error) {
    console.error(error.message);
    return { data: null, error };
  }
};
