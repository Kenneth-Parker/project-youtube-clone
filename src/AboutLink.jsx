import React from "react";
import "./HomeNavBar.css"
import AboutLink from './AboutLink';


const Link = () => {
   
return (
 
    <>
 
 <div>
    <h1>About the team</h1>
    <nav>
    <ul>
    <li><a href="/">Home</a></li>
    <li><AboutLink /></li>
        {/* Other navigation links */}
    </ul>
    </nav>
        {/* Other content */}
 </div>
   
      </>

);
 
};
  
  export default Link;