# mod-4-project

# **📚 ReadMe Maybe?**

**ReadMe Maybe?** is an interactive, single-page book discovery application that allows users to explore books by genre, search by title or author, receive personalized recommendations, and discover random books — all without navigating away from the page. The app uses public book data to create a dynamic and engaging browsing experience.

---

## **👥 Team**

- **Amyruth Rubio**

- **Abel Delgadillo**

---

## **🌐 Live Site**

🚀 _Deployed link will be added here once live_

---

## **🎯 Project Purpose**

The goal of this project was to build an **interactive, data-driven UI** using a public API while demonstrating clean separation of concerns, thoughtful UX decisions, and real-world problem solving when working with imperfect data.

---

## **✨ Features**

### **🔍 Search**

- Search for books by **title, author, or genre**

- Results are fetched dynamically and rendered in real time

- Genre-based browsing is hidden when a search is active to reduce visual noise

### **📚 Browse by Genre**

- On initial load, users can browse books by predefined genres

- Each genre is displayed in its own horizontal list for easy exploration

### **⭐ Recommended Books**

- After a user performs a search, the app generates recommendations based on **shared subject metadata**

- Recommendations are derived by:
  1. Analyzing the top search result

  2. Extracting its subject tags

  3. Fetching related books based on those subjects

- Duplicate recommendations are avoided to keep suggestions meaningful

### **🎲 Random Book Generator**

- Since the API does not provide a true random endpoint, randomness is simulated by:
  - Selecting a random genre

  - Selecting a random book within that genre

- The selected book is displayed using the same modal system as other book details

### **🪟 Book Detail Modal**

- Clicking any book opens a modal overlay

- Displays:
  - Book cover (with fallback handling)

  - Title

  - Description (when available)

- The page never reloads or navigates away, maintaining a seamless user experience

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

`https://openlibrary.org/search.json?q=QUERY`  
`https://openlibrary.org/subjects/GENRE.json`

### **Fetching a Single Book**

`https://openlibrary.org/works/WORK_ID.json`

### **Data Used**

- Titles

- Authors

- Subjects / genres

- Descriptions

- Cover images (with fallbacks)

The application handles common API inconsistencies such as missing images and varying data formats.

---

## **🗂️ Project Structure**

`├── index.html`  
`├── src/`  
`│   ├── main.js          # Application orchestration & state control`  
`│   ├── fetch-helpers.js # All API communication`  
`│   ├── dom-helpers.js   # DOM creation and rendering`  
`│   └── styles/`  
`│       └── style.css`  
`├── public/`  
`│   └── placeholder.jpg # Fallback image for missing covers`  
`└── README.md`

---

## **🧩 Architecture & Design Decisions**

- **Separation of Concerns**
  - Fetch helpers handle data retrieval only

  - DOM helpers handle rendering only

  - `main.js` orchestrates application behavior and user interactions

- **Single-Page Experience**
  - No page reloads

  - No route changes

  - All UI updates are state-driven

- **Reusable Modal System**
  - One modal handles book clicks and random book selection

  - Reduces duplication and keeps behavior consistent

- **Defensive Programming**
  - Graceful handling of missing images and descriptions

  - Image fallbacks using placeholders and error handlers

---

## **♿ Accessibility & UX Considerations**

- Semantic HTML elements

- Accessible form controls and buttons

- Clickable content with clear affordances

- Modal close controls available at all times

---

## **🛠️ Running the Project Locally**

`npm install`  
`npm run dev`

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

- User reading history for personalized recommendations

- Improved recommendation ranking logic

- Keyboard navigation for modal interactions

- Loading states and skeleton UI

- Expanded filtering options

---

## **🙌 Acknowledgments**

- **Open Library** for providing free, public access to book data

- **Marcy Lab School** for project guidance and curriculum support
