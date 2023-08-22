import { useState } from "react";
// import { FetchYouTubeData } from "../Fetch";


function SearchBar (){

const [searchValue, setSearchValue] = useState("")


return (
    <>
    <input
    type="text"
    value={searchValue}
    onChange={(e) => setSearchValue(e.target.value)}
    />
    <button> 
        Search
    </button>
        </>
)
}





export default SearchBar