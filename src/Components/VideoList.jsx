// VideoList.jsx
import React from 'react';

function VideoList({ videos }) {
  return (
    <div className="video-list">
      {videos.map((video) => (
        <div className="video-card" key={video.id.videoId}>
          <img src={video.snippet.thumbnails.default.url} alt={video.snippet.title} />
          <p>{video.snippet.title}</p>
        </div>
      ))}
    </div>
  );
}

export default VideoList;
