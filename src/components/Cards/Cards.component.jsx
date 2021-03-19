import React from 'react';
import styled from 'styled-components';
import mockVideos from '../../mock/youtube-videos-mock.json';
import Card from '../Card/Card.component';

const CardsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: auto 5rem;
`;

function Cards() {
  const videos = mockVideos.items;
  return (
    <CardsGrid>
      {videos.map((video, i) => (
        <Card video={video} key={video.etag} />
      ))}
    </CardsGrid>
  );
}

export default Cards;
