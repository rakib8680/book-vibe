import bannerImg from "../../assets/image.png";

const Banner = () => {
  return (
    <div className="bg-gray-100 rounded-2xl my-10 px-36 py-20 flex flex-col md:flex-row items-center justify-around">
      {/* Left Side - Text & Button */}
      <div className="md:w-1/2 flex-2">
        <h1
          className="text-4xl md:text-6xl font-bold leading-normal"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Books to freshen up <br /> your bookshelf
        </h1>
        <button className="mt-8 bg-[#23BE0A] text-white font-semibold px-7 py-3 rounded-lg text-lg hover:opacity-90">
          View The List
        </button>
      </div>

      {/* Right Side - Book Image */}
      <div className="md:w-1/2 flex justify-center mt-8 md:mt-0 flex-1">
        <img
          src={bannerImg}
          alt="Book"
          className="max-h-[400px] object-contain"
        />
      </div>
    </div> 
  );
};

export default Banner;
