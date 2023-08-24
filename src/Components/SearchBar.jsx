import React, { useState } from "react";

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchError, setSearchError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchTerm === "") {
      setSearchError("No Search Results Yet! Please submit a search above !");
    } else {
      onSearch(searchTerm); // Pass the search term to the parent component
    }
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <input
          className="searchBarArea"
          type="text"
          placeholder="Search for videos"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="searchBarArea-btn" type="submit">
          Search
        </button>
        {searchError && <p className="error-message">{searchError}</p>}
      </form>
    </div>
  );
}

export default SearchBar;
