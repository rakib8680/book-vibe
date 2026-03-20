import { ArrowDownWideNarrow } from "lucide-react";
import { useLoaderData } from "react-router";
import { getStoredBooks } from "../../utility/addToDB";
import ListedBooksCard from "./ListedBooksCard";

const ListedBooks = () => {
  const books = useLoaderData();
  const readListBooks = getStoredBooks("readList").map((id) =>
    books.find((book) => book.bookId === Number(id)),
  );
  const wishListBooks = getStoredBooks("wishList").map((id) =>
    books.find((book) => book.bookId === Number(id)),
  );

  return (
    <div>
      <div className="my-10 bg-gray-100 rounded-2xl py-8">
        <h1 className="text-center text-3xl font-bold">Books</h1>
      </div>

      <div className=" my-10 flex justify-center">
        <button className="btn bg-[#23BE0A] border-none text-white rounded-lg px-8 py-6 font-medium text-lg hover:opacity-90">
          Sort By
          <ArrowDownWideNarrow size={20} />
        </button>
      </div>

      {/* name of each tab group should be unique */}
      <div className="tabs tabs-lift">
        <input
          type="radio"
          name="my_tabs_3"
          className="tab rounded-t-lg"
          aria-label="Read Books"
          defaultChecked
        />
        <div className="tab-content p-6">
          {readListBooks.map((book) => (
            <ListedBooksCard key={book.bookId} book={book} />
          ))}
        </div>

        <input
          type="radio"
          name="my_tabs_3"
          className="tab rounded-t-lg"
          aria-label="Wishlist Books"
        />
        <div className="tab-content  p-6">
          {wishListBooks.map((book) => (
            <ListedBooksCard key={book.bookId} book={book} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
