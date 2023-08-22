import { useState } from "react";
import { FetchYouTubeData } from "../Fetch"

function SearchBar() {
  const [searchValue, setSearchValue] = useState("");
//   const [searchResults, setSearchResults] = useState([]);

//   const handleSearch = async () => {
//     if (searchValue.trim() !== "") {
//       const results = await FetchYouTubeData(searchValue);
//       setSearchResults(results);
//     }
//   };

  return (
    <>
      <input
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button >Search</button>
      {/* <ul>
        {searchResults.map((result) => (
          <li key={result.id.videoId}>{result.snippet.title}</li>
        ))}
      </ul> */}
    </>
  );
}

export default SearchBar;
