import { useState, useEffect } from 'react';

function useYouTubeVideos(searchTerm) {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const API_KEY = `${import.meta.env.VITE_REACT_APP_API_KEY}`;
        const API_URL = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&part=snippet&q=${searchTerm}`;

        fetch(API_URL)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(
                        `HTTP error! Status: ${response.status} - ${response.statusText}`
                    );
                }
                return response.json();
            })
            .then((data) => {
                setVideos(data.items);
            })
            .catch((error) => {
                console.error("Error fetching data from YouTube API:", error);
            });
    }, [searchTerm]);

    return videos;
}

export default useYouTubeVideos;
