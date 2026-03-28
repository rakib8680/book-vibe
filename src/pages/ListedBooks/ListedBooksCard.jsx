import { MapPin, Users, FileText } from "lucide-react";
import { Link } from "react-router";

const ListedBooksCard = ({ book }) => {
  const {
    bookId,
    image,
    bookName,
    author,
    category,
    rating,
    totalPages,
    publisher,
    yearOfPublishing,
    tags,
  } = book;

  return (
    <div className="flex flex-col md:flex-row gap-6 border border-gray-200 rounded-2xl p-5 space-y-5 mb-6">
      {/* Book Image */}
      <div className="bg-gray-100 rounded-xl flex justify-center items-center p-6  min-w-[170px] max-w-[170px] self-center md:self-auto">
        <img
          src={image}
          alt={bookName}
          className="max-h-[170px] object-contain"
        />
      </div>

      {/* Book Info */}
      <div className="flex flex-col justify-between flex-1 gap-3">
        {/* Title */}
        <h2
          className="text-2xl font-bold"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {bookName}
        </h2>

        {/* Author */}
        <p className="text-gray-500">By : {author}</p>

        {/* Tags & Year */}
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-bold text-black">Tag</span>
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[#23BE0A] bg-[#23be0a0d] px-4 py-1 rounded-full text-sm font-medium"
            >
              #{tag}
            </span>
          ))}
          <span className="flex items-center gap-1 text-gray-500">
            <MapPin size={16} />
            Year of Publishing: {yearOfPublishing}
          </span>
        </div>

        {/* Publisher & Pages */}
        <div className="flex flex-wrap items-center gap-5 text-gray-500">
          <span className="flex items-center gap-1">
            <Users size={16} />
            Publisher: {publisher}
          </span>
          <span className="flex items-center gap-1">
            <FileText size={16} />
            Page {totalPages}
          </span>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200"></div>

        {/* Bottom Row */}
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-[#328EFF] bg-[#328EFF26] px-5 py-2 rounded-full text-sm font-light">
            Category: {category}
          </span>
          <span className="text-[#FFAC33] bg-[#FFAC3326] px-5 py-2 rounded-full text-sm font-light">
            Rating: {rating}
          </span>
          <Link to={`/book/${bookId}`}>
            <button className="btn bg-[#23BE0A] border-none text-white rounded-full px-5 py-2 text-sm font-light hover:opacity-90 min-h-0 h-auto">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ListedBooksCard;
