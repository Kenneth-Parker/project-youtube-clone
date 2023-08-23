import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import HomeNavBar from './HomeNavBar';

function VideoShow() {
  const { videoId } = useParams();
  const [videoDetails, setVideoDetails] = useState(null);
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const API_KEY = `${import.meta.env.VITE_REACT_APP_API_KEY}`;
    const API_URL = `https://www.googleapis.com/youtube/v3/videos?key=${API_KEY}&part=snippet&id=${videoId}`;

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
        setVideoDetails(data.items[0]);
      })
      .catch((error) => {
        console.error("Error fetching video details from YouTube API:", error);
      });
  }, [videoId]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name.trim() === '' || comment.trim() === '') {
      setError('Both name and comment are required.');
      return;
    }
    const newComment = { name, comment };
    setComments([...comments, newComment]);
    setName('');
    setComment('');
    setError('');
  };

  return (
    <div>
      <header>
        <HomeNavBar />
      </header>
      {videoDetails && (
        <>
          <h2>{videoDetails.snippet.title}</h2>
          <iframe
            title={videoDetails.snippet.title}
            width="88%" // Use percentage value for dynamic width
            height="0"
            src={`https://www.youtube.com/embed/${videoId}`}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            onLoad={(e) => {
              const iframe = e.target;
              const aspectRatio = 315 / 560; // Adjust aspect ratio as needed
              const newHeight = iframe.offsetWidth * aspectRatio;
              iframe.style.height = `${newHeight}px`;
            }}
          ></iframe>
          <p>Description: {videoDetails.snippet.description}</p>
          <hr />

          

          <div>
            <h3>Add a Comment</h3>
            <form onSubmit={handleSubmit}>
              <div>
                <label>Name: </label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <br />
              <div>
                <label>Comment: </label>
                <textarea value={comment} onChange={(e) => setComment(e.target.value)} />
              </div>
              {error && <p style={{ color: 'red' }}>{error}</p>}
              <button type="submit">Submit</button>
            </form>
          </div>

          <div>
            <h3>Comments</h3>
            {comments.map((c, index) => (
              <div key={index}>
                <p><strong>{c.name}</strong> says: {c.comment}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default VideoShow;
