import { useLoaderData, useParams } from "react-router";

const BookDetails = () => {
  const { bookId } = useParams();
  const books = useLoaderData();
  const book = books.find((book) => book.bookId === Number(bookId));
  const {
    image,
    bookName,
    author,
    category,
    rating,
    review,
    totalPages,
    publisher,
    yearOfPublishing,
    tags,
  } = book;

  return (
    <div className="flex flex-col md:flex-row gap-10 my-12">
      {/* Left - Book Image */}
      <div className="md:w-1/2 bg-gray-100 rounded-2xl flex justify-center items-center p-12">
        <img
          src={image}
          alt={bookName}
          className="max-h-[500px] object-contain"
        />
      </div>

      {/* Right - Book Info */}
      <div className="md:w-1/2 space-y-4">
        {/* Title */}
        <h1
          className="text-4xl font-bold"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {bookName}
        </h1>

        {/* Author */}
        <p className="text-gray-600 text-lg">By : {author}</p>

        {/* Divider */}
        <div className="border-t border-gray-300"></div>

        {/* Category */}
        <p className="text-gray-600 font-medium text-lg">{category}</p>

        {/* Divider */}
        <div className="border-t border-gray-300"></div>

        {/* Review */}
        <p className="text-gray-600 leading-relaxed">
          <span className="font-bold text-black">Review : </span>
          {review}
        </p>

        {/* Divider */}
        <div className="border-t border-gray-300"></div>

        {/* Tags */}
        <div className="flex items-center gap-3">
          <span className="font-bold text-black">Tag</span>
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[#23BE0A] bg-[#23be0a0d] px-4 py-1 rounded-full text-sm font-medium"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300"></div>

        {/* Book Info Table */}
        <div className="space-y-2">
          <div className="flex gap-4">
            <span className="text-gray-500 w-44">Number of Pages:</span>
            <span className="font-semibold">{totalPages}</span>
          </div>
          <div className="flex gap-4">
            <span className="text-gray-500 w-44">Publisher:</span>
            <span className="font-semibold">{publisher}</span>
          </div>
          <div className="flex gap-4">
            <span className="text-gray-500 w-44">Year of Publishing:</span>
            <span className="font-semibold">{yearOfPublishing}</span>
          </div>
          <div className="flex gap-4">
            <span className="text-gray-500 w-44">Rating:</span>
            <span className="font-semibold">{rating}</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 pt-2">
          <button className="btn bg-white  border-gray-300 text-black rounded-lg px-8 py-6 font-semibold hover:bg-gray-100">
            Read
          </button>
          <button className="btn bg-[#59C6D2] border-none text-white rounded-lg px-8 py-6 font-semibold hover:opacity-90">
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
