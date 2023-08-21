import React from "react";
import "./HomeNavBar.jsx"
import AboutPage from './AboutPage.jsx';


const AboutPage = () => {
   
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
  
  export default AboutPage;