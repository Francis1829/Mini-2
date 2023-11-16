import React, { useState } from "react";

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="search-bar flex justify-center items-center p-5 rounded-md  gap-2">
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} className="box-border w-full rounded-md shadow-sm transition-all text-scale-1200 border focus:shadow-md outline-none focus:ring-current focus:ring-2 focus:border-scale-900 focus:ring-scale-400 placeholder-scale-800 text-sm px-4 py-2"
      />
      <button onClick={handleSearch} className="cursor-pointer space-x-2 text-center text-white font-semibold ease-out duration-200 rounded-md outline-none transition-all outline-0 bg-theme-color border shadow-sm text-base px-7 py-1 hover:bg-light hover:text-black">Search</button>
    </div>
  );
}

export default SearchBar;
