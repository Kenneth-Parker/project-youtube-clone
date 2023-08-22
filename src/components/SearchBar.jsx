import { useState } from "react";


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