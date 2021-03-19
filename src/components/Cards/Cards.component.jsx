import React from 'react';
// import styled from 'styled-components';
import mockVideos from '../../mock/youtube-videos-mock.json';
import Card from '../Card/Card.component';

function Cards() {
  const videos = mockVideos.items;
  console.log(videos)
  return (
    <div className="cards">
      {videos.map((video) => (
        <Card video={video} />
      ))}
    </div>
  );
}

export default Cards;
