import React, { useState } from 'react';
import '../Components/Home.css'; // Correct the CSS import path
import ut from '../assets/youtube-logo-png-transparent-image-5.png';
import HomeNavBar from './HomeNavBar';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import useYouTubeVideos from './useYouTubeVideos';

function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const videos = useYouTubeVideos(searchTerm);

  const handleSearch = (newSearchTerm) => {
    setSearchTerm(newSearchTerm);
  };

  return (
    <>
      <header>
        <HomeNavBar />
      </header>

      <SearchBar onSearch={handleSearch} />

      {searchTerm ? (
        <VideoList videos={videos} />
      ) : (
        <p className="search-prompt">Start by searching for videos!</p>
      )}

      <div>
        <a href="https://youtu.be/ope1743gdAw" target="_blank" rel="noopener noreferrer">
          <img src={ut} className="logo" alt="YouTube logo" />
        </a>
      </div>
      <h1 className="ourNames">5 i v e Shades Of Brown</h1>
    </>
  );
}

export default Home;
