import { getFavorites, removeBookFromFavorites } from "./favorites-helpers.js";

const list = document.querySelector("#favorites-list");

const renderFavorites = () => {
  const favorites = getFavorites();
  list.innerHTML = "";

  if (!favorites.length) {
    list.innerHTML = "<p>No saved books yet.</p>";
    return;
  }

  favorites.forEach((book) => {
    const li = document.createElement("li");

    const img = document.createElement("img");
    img.src = book.cover;
    img.alt = book.title;

    const title = document.createElement("h3");
    title.textContent = book.title;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.classList.add("remove-btn");

    removeBtn.addEventListener("click", () => {
      removeBookFromFavorites(book.key);
      renderFavorites(); // re-render after removal
    });

    li.append(img, title, removeBtn);
    list.append(li);
  });
};

// Initial render
renderFavorites();
