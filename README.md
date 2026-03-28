# 📚 Book Vibe

A modern book review and reading tracker app built with React. Browse books, save them to your read list or wishlist, sort and filter your collection, and visualize your reading progress with beautiful charts.

🔗 **Live Site:** [book-vibe.vercel.app](https://book-vibe-alpha.netlify.app)

---

## ✨ Features

- **Browse Books** — Explore a curated collection of classic and modern books with detailed information
- **Book Details** — View full book info including reviews, tags, ratings, publisher info, and page count
- **Read List & Wishlist** — Save books to your personal read list or wishlist using localStorage
- **Sort Books** — Sort your saved books by rating, number of pages, or publishing year
- **Pages to Read Chart** — Visualize your reading list with a custom triangle bar chart
- **Toast Notifications** — Get instant feedback with Sonner toast notifications for all actions
- **Responsive Design** — Fully responsive layout that works across all screen sizes

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **React 19** | UI Library |
| **React Router 7** | Client-side routing |
| **Vite 8** | Build tool & dev server |
| **Tailwind CSS 4** | Utility-first styling |
| **DaisyUI 5** | Component library |
| **Recharts** | Data visualization |
| **Sonner** | Toast notifications |
| **Lucide React** | Icons |

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/rakib8680/book-vibe.git

# Navigate to the project
cd book-vibe

# Install dependencies
npm install --legacy-peer-deps

# Start the dev server
npm run dev
```

The app will be running at `http://localhost:5173`

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Header/Navbar.jsx
│   └── Footer/Footer.jsx
├── pages/
│   ├── Home/Home.jsx
│   ├── Books/BookDetails.jsx
│   ├── ListedBooks/
│   │   ├── ListedBooks.jsx
│   │   └── ListedBooksCard.jsx
│   ├── PagesToRead/PagesToRead.jsx
│   ├── Root/Root.jsx
│   └── ErrorPage/ErrorPage.jsx
├── Routes/routes.jsx
├── utility/addToDB.js
└── main.jsx
```

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
