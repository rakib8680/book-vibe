import { Link } from "react-router";

const SingleBookCard = ({ book }) => {
  const { bookId, image, tags, bookName, author, category, rating } = book;
  return (
    <Link
      to={`/book/${bookId}`}
      key={bookId}
      className="card bg-white border border-gray-200 rounded-2xl p-6 hover:border-[#23BE0A] hover:cursor-pointer transition-colors duration-300 space-y-3"
    >
      {/* Book Image */}
      <div className="bg-gray-100 rounded-xl flex justify-center items-center py-8">
        <img src={image} alt={bookName} className="h-[180px] object-contain" />
      </div>

      {/* Tags */}
      <div className="flex gap-3 mt-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-[#23BE0A] bg-[#23be0a0d] px-4 py-1 rounded-full text-sm font-medium"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Title */}
      <h2
        className="text-2xl font-bold mt-3"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        {bookName}
      </h2>

      {/* Author */}
      <p className="text-gray-500 text-sm mt-1">By : {author}</p>

      {/* Divider */}
      <div className="border-t border-dashed border-gray-300 my-3"></div>

      {/* Category & Rating */}
      <div className="flex justify-between items-center">
        <span className="text-gray-600 font-medium">{category}</span>
        <div className="flex items-center gap-1">
          <span className="text-gray-600 font-medium">{rating.toFixed(2)}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
};

export default SingleBookCard;
