import React from "react";

const Search = ({ onSearchChange }) => {
  return (
    <div>
      <input
        type="search"
        className="searchBox"
        placeholder="search"
        onChange={onSearchChange}
      />
    </div>
  );
};

export default Search;
