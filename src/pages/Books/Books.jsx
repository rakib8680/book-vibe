import { Suspense } from "react";
import Book from "./Book";

const Books = () => {
  const BooksPromise = fetch("booksData.json").then((res) => res.json());

  return (
    <div className="my-36">
      <h1
        className="text-5xl font-bold text-center  mb-12"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        Books
      </h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Book booksPromise={BooksPromise} />
      </Suspense>
    </div>
  );
};

export default Books;
