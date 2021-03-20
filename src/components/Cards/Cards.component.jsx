import React from 'react';
import styled from 'styled-components';
import mockVideos from '../../mock/youtube-videos-mock.json';
import Card from '../Card/Card.component';

const CardsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 2rem 5rem;
`;

function Cards() {
  const videos = mockVideos.items;
  return (
    <CardsGrid>
      {videos.map((video) => (
        <Card
          key={video.etag}
          url={video.snippet.thumbnails.medium.url}
          title={video.snippet.title}
          description={video.snippet.description} />
      ))}
    </CardsGrid>
  );
}

export default Cards;
