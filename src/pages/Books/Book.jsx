import { use } from "react";
import SingleBookCard from "./SingleBookCard";

const Book = ({ booksPromise }) => {
  const books = use(booksPromise);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {books.map((book) => (
        <SingleBookCard key={book.bookId} book={book} />
      ))}
    </div>
  );
};

export default Book;
