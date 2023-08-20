import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import "./HomeNavBar.css"

function HomeNavBar ( ){
    const handleLogoClick = () => {
        // Do something on click
      };
    
      const handleHomeClick = () => {
        // Do something on click
      };
    
      const handleAboutClick = () => {
        // Do something .
      };
    
    return (
      <header>
        <nav>
            <div className='Big-Logo'>
          <a href="./App.jsx" onClick={handleLogoClick} > YouTube</a>
          </div>
          <div>
          <a href="." onClick={handleHomeClick }> Home</a>

          <a href="./" onClick={handleAboutClick }> About</a>
          </div>
        </nav>
      </header>  
    )
}






export default HomeNavBar;