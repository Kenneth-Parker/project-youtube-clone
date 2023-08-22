// import React from 'react';
// import ReactPlayer from 'react-player';

// const VideoPlayer = () => {
//   return (
//     <div>
//       <h2>Video Player</h2>
//       <ReactPlayer
//         url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
//         controls={true}
//         width="800px"
//         height="450px"
//       />
//     </div>
//   );
// };

// export default VideoPlayer;


import React, { useState } from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = () => {
  const [videoSources, setVideoSources] = useState([
    'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    'https://www.youtube.com/watch?v=Pb4j2UqkOJ0',
    'https://www.youtube.com/watch?v=h_D3VFfhvs4'
  ]);

  const renderVideoPlayers = () => {
    return videoSources.map((url, index) => (
      <div key={index}>
        <ReactPlayer
          url={url}
          controls={true}
          width="800px"
          height="450px"
        />
      </div>
    ));
  };

  return (
    <div>
      <h2>Video Player</h2>
      {renderVideoPlayers()}
    </div>
  );
};

export default VideoPlayer;