// import React from 'react';
// import './VideoGallery.css'; 

// const VideoGallery = () => {
//   const videoIds = [
//     'ketN3hDU71Q?si=M4BI8ouQMHcAB2OS', // Replace with your video IDs
//     'ketN3hDU71Q?si=M4BI8ouQMHcAB2OS', 
//     'ketN3hDU71Q?si=M4BI8ouQMHcAB2OS', 
//     'ketN3hDU71Q?si=M4BI8ouQMHcAB2OS', 
//     'ketN3hDU71Q?si=M4BI8ouQMHcAB2OS', 
//     'ketN3hDU71Q?si=M4BI8ouQMHcAB2OS', 
//     'ketN3hDU71Q?si=M4BI8ouQMHcAB2OS', 
//     'ketN3hDU71Q?si=M4BI8ouQMHcAB2OS'  
//   ];

// return (
//   <div className='video-wrap'>
//     <h1 className="gallery-header">Video Gallery</h1>
//   <div className="video-grid">
//     {videoIds.map((id, index) => (
//       <div key={index} className="video-container">
//         <iframe
//           width="100%"
//           height="100%"
//           src={`https://www.youtube.com/embed/${id}?controls=0`}
//           title={`YouTube video player ${index + 1}`}
//           frameBorder="0"
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//           allowFullScreen
//           loading="lazy" 
//         ></iframe>
//       </div>
//     ))}
//   </div>
//   </div>
// );}
 
// export default VideoGallery;
import React, { useState } from 'react';
import './VideoGallery.css'; 

const VideoGallery = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const videoIds = [
    'ketN3hDU71Q',
    'ketN3hDU71Q',
    'ketN3hDU71Q',
    'ketN3hDU71Q',
    'ketN3hDU71Q',
    'ketN3hDU71Q',
    'ketN3hDU71Q',
    'ketN3hDU71Q',
    'ketN3hDU71Q'
  ];

  const handleVideoClick = (id) => {
    setSelectedVideo(id);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  return (
    <div className='video-wrap'>
      <h1 className="gallery-header">Video Gallery</h1>
      <div className="video-grid">
        {videoIds.map((id, index) => (
          <div key={index} className="video-container">
            <img
              src={`https://img.youtube.com/vi/${id}/0.jpg`}  
              alt={`Thumbnail ${index + 1}`}
              className="thumbnail"
              onClick={() => handleVideoClick(id)}
            />
          </div>
        ))}
      </div>

      {selectedVideo && (
        <div className="video-popup">
          <div className="video-popup-content">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`} 
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <button className="close-button" onClick={closeVideo}>X</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoGallery;


