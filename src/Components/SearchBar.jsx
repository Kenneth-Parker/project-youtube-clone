import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm); // Pass the search term to the parent component
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <input className='searchBarArea'
          type="text"
          placeholder="Search for videos"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className='searchBarArea-btn' type="submit">Search</button>
      </form>
    </div>
  );
}

export default SearchBar;
