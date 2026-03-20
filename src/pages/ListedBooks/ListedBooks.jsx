import { ArrowDownWideNarrow } from "lucide-react";

const ListedBooks = () => {
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
          className="tab"
          aria-label="Tab 1"
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          Tab content 1
        </div>

        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="Tab 2"
          defaultChecked
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          Tab content 2
        </div>

        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="Tab 3"
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          Tab content 3
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
