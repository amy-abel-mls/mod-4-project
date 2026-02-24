# **📚 ReadMe Maybe?**

**ReadMe Maybe?** is an interactive, single-page book discovery application that allows users to explore books by genre, search by title or author, receive personalized recommendations, save books for later, and discover random books — all while maintaining a smooth, uninterrupted browsing experience. The app uses public book data to create a dynamic and engaging way to explore new reads.

---

## **👥 Team**

- **Amyruth Rubio**
- **Abel Delgadillo**

---

## **🌐 Live Site**

🚀 [_ReadMe Maybe?_](https://amy-abel-mls.github.io/mod-4-project/)

---

## **🎯 Project Purpose**

The goal of this project was to build an **interactive, data-driven UI** using a public API while demonstrating clean separation of concerns, thoughtful UX decisions, and real-world problem solving when working with imperfect data.

---

## **✨ Features**

### **🔍 Search**

- Search for books by **title, author, or genre**
- Results are fetched dynamically and rendered in real time
- Genre-based browsing is hidden when a search is active to reduce visual noise

---

### **📚 Browse by Genre**

- On initial load, users can browse books by predefined genres
- Each genre is displayed in its own horizontal list for easy exploration

---

### **⭐ Recommended Books**

- After a user performs a search, the app generates recommendations based on **shared subject metadata**
- Recommendations are derived by:
  1. Analyzing the top search result
  2. Extracting its subject tags
  3. Fetching related books based on those subjects
- Duplicate recommendations are avoided to keep suggestions meaningful

---

### **🎲 Random Book Generator**

- Since the API does not provide a true random endpoint, randomness is simulated by:
  - Selecting a random genre
  - Selecting a random book within that genre
- The selected book is displayed using the same modal system as other book details

---

### **🪟 Book Detail Modal**

- Clicking any book opens a modal overlay
- Displays:
  - Book cover (with fallback handling)
  - Title
  - Genres
  - Description (when available)
- The page never reloads or navigates away, maintaining a seamless user experience

---

### **📌 Read Later / Favorites**

- Users can save books to a **Read Later** list directly from the book detail modal
- The modal button dynamically toggles between:
  - **“Read Later”**
  - **“Remove from Read Later”**
- Saved books persist across sessions using **localStorage**
- A dedicated **Read Later page** allows users to:
  - View saved books
  - Remove books from their list
- This feature was implemented without a backend, demonstrating client-side state persistence

---

## **🧠 Technical Overview**

### **Tech Stack**

- **HTML5** – Semantic structure
- **CSS3** – Layout and visual styling
- **JavaScript (ES6+)** – Application logic and DOM manipulation
- **Vite** – Development server and build tool
- **Open Library API** – Public book data source

---

## **🔌 API Usage**

This project uses the **Open Library API**, including:

### **Fetching Multiple Books**

https://openlibrary.org/search.json?q=QUERY  
https://openlibrary.org/subjects/GENRE.json

### **Fetching a Single Book**

https://openlibrary.org/works/WORK\_ID.json

### **Data Used**

- Titles
- Authors
- Subjects / genres
- Descriptions
- Cover images (with fallbacks)

The application handles common API inconsistencies such as missing images and varying data formats.

---

## **🗂️ Project Structure**

├── index.html  
├── favorites.html \# Read Later page  
├── src/  
│ ├── main.js \# Application orchestration & state control  
│ ├── fetch-helpers.js \# All API communication  
│ ├── dom-helpers.js \# DOM creation and rendering  
│ ├── favorites.js \# Read Later page rendering logic  
│ ├── favorites-helpers.js \# localStorage utilities for favorites  
│ └── style.css  
├── public/  
│ └── placeholder.jpg \# Fallback image for missing covers  
└── README.md

---

## **🧩 Architecture & Design Decisions**

- **Separation of Concerns**
  - Fetch helpers handle data retrieval only
  - DOM helpers handle rendering only
  - `main.js` manages application flow and user interactions
  - Favorites helpers manage persistent storage logic
- **Single-Page Experience**
  - No page reloads during browsing
  - Modal-based interactions keep users in context
- **Reusable Modal System**
  - One modal handles book clicks and random book selection
  - Also serves as the interaction point for saving/removing favorites
- **Client-Side State Management**
  - Favorites are persisted using `localStorage`
  - Enables cross-session data retention without a backend
- **Defensive Programming**
  - Graceful handling of missing images and descriptions
  - Image fallbacks using placeholders

---

## **♿ Accessibility & UX Considerations**

- Semantic HTML elements
- Accessible form controls and buttons
- Clickable content with clear affordances
- Modal close controls available at all times
- Reduced visual clutter during active searches

---

## **🛠️ Running the Project Locally**

npm install  
npm run dev

The app will be available at the local Vite development server.

---

## **🚀 Deployment**

This project is built using Vite and can be deployed to platforms such as:

- Netlify
- Vercel
- GitHub Pages

Static assets (such as placeholder images) are served from the `public/` directory.

---

## **🔮 Future Improvements**

- User reading history for enhanced personalization
- Loading states and skeleton UI
- Expanded filtering options
- Cloud-based persistence for favorites

---

## **🙌 Acknowledgments**

- **Open Library** for providing free, public access to book data
- **Marcy Lab School** for project guidance and curriculum support
