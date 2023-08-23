import React from 'react'
import { Route, Routes, Link } from "react-router-dom"
import "./HomeNavBar.css"
import AboutPage from '../AboutPage';
// import Link from '../AboutLink';

function HomeNavBar() {
    // const handleLogoClick = () => {
    //     // Do something on click
    // };

    // const handleHomeClick = () => {
    //     // Do something on click
    // };

    // const handleAboutClick = () => {
    //     // Do something .
    // };

    return (
        <>
           

                <nav>

                    <div className='Big-Logo'>
                       
                            <li className='logo'><Link to={"/"}> YouTube </Link></li>
                    </div>
                    
                    <div>
                        <ul>
                        <li className='homeLi'> <Link to={"/Home"}> Home</Link> </li>

                        <li className="aboutLi"> <Link to={"/About"}>About </Link></li>
                        </ul>
                </div>

            </nav>
       

            <Routes>
                <Route path="/" element={<></>} />
                <Route path="/Home" element={<h1> Home </h1>} />
                <Route path="/About" element={<AboutPage/> } /> 
            </Routes>

      </>
    )
}






export default HomeNavBar;