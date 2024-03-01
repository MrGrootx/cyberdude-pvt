import { IoIosSearch } from "react-icons/io";
const Search = () => {
  return (
    <>
      <div>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only "
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <IoIosSearch className="text-2xl text-white" />
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-2 ps-10 text-sm text-gray-200 border  border-gray-200 border-opacity-40 bg-[#6529dd] rounded-lg font-bold outline-none"
            placeholder="Search"
          />
          <h3
            type="submit"
            className="absolute end-2.5 bottom-2.5 font-medium text-sm px-1 mt-3 bg-[#4b1ea5] bg-opacity-25 text-gray-400 inline-block"
          >
            Ctrl K
          </h3>
        </div>
      </div>
    </>
  );
};

export default Search;
