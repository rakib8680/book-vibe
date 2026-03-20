import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import BookDetails from "../pages/Books/BookDetails";
import ListedBooks from "../pages/ListedBooks/ListedBooks";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
      {
        path: "/book/:bookId",
        Component: BookDetails,
        loader: () => fetch(`/booksData.json`),
      },
      {
        path: "/listed-books",
        Component: ListedBooks,
      },
    ],
  },
]);
