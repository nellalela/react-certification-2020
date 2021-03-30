import React from 'react';
import mockVideos from '../../mock/youtube-videos-mock.json';
import Card from '../Card/Card.component';
import { CardsGrid } from './Cards.styled';

function Cards() {
  const videos = mockVideos.items;
  return (
    <CardsGrid>
      {videos.map((video) => (
        <Card
          key={video.etag}
          url={video.snippet.thumbnails.medium.url}
          title={video.snippet.title}
          description={video.snippet.description}
        />
      ))}
    </CardsGrid>
  );
}

export default Cards;
