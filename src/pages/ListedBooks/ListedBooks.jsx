import { ArrowDownWideNarrow } from "lucide-react";
import { useLoaderData } from "react-router";
import { getStoredBooks } from "../../utility/addToDB";
import ListedBooksCard from "./ListedBooksCard";
import { useState } from "react";

const ListedBooks = () => {
  const [sortBy, setSortBy] = useState(null);

  const books = useLoaderData();
  const readListBooks = getStoredBooks("readList").map((id) =>
    books.find((book) => book.bookId === Number(id)),
  );
  const wishListBooks = getStoredBooks("wishList").map((id) =>
    books.find((book) => book.bookId === Number(id)),
  );

  // generic sort function that works for both lists
  const sortBooks = (bookList) => {
    if (!sortBy) return bookList;
    return [...bookList].sort((a, b) => b[sortBy] - a[sortBy]);
  };

  const sortedReadList = sortBooks(readListBooks);
  const sortedWishList = sortBooks(wishListBooks);

  const handleSortBy = (sortType) => {
    setSortBy(sortType);
  };

  return (
    <div>
      <div className="my-10 bg-gray-100 rounded-2xl py-8">
        <h1 className="text-center text-3xl font-bold">Books</h1>
      </div>

      <div className="my-10 flex justify-center">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn border-none bg-[#23BE0A] text-white rounded-lg px-8 text-lg font-semibold hover:bg-[#1fa008]"
          >
            Sort By
            <ArrowDownWideNarrow size={20} />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow-md mt-2"
          >
            <li>
              <a onClick={() => handleSortBy("rating")}>Rating</a>
            </li>
            <li>
              <a onClick={() => handleSortBy("totalPages")}>Number of Pages</a>
            </li>
            <li>
              <a onClick={() => handleSortBy("yearOfPublishing")}>
                Publishing Year
              </a>
            </li>
          </ul>
        </div>
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
          {sortedReadList.length === 0 ? (
            <p className="text-center text-gray-500">No books in read list</p>
          ) : (
            sortedReadList.map((book) => (
              <ListedBooksCard key={book.bookId} book={book} />
            ))
          )}
        </div>

        <input
          type="radio"
          name="my_tabs_3"
          className="tab rounded-t-lg"
          aria-label="Wishlist Books"
        />
        <div className="tab-content  p-6">
          {sortedWishList.length === 0 ? (
            <p className="text-center text-gray-500">No books in wishlist</p>
          ) : (
            sortedWishList.map((book) => (
              <ListedBooksCard key={book.bookId} book={book} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
