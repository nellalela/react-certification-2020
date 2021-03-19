import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 30%;
  background-color: #fff;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%),
    0px 1px 3px 0px rgb(0 0 0 / 12%);
  margin: 0.8rem 0;
`;

const CardImg = styled.img`
  max-height: 160px;
  width: 100%;
  min-width: 284px;
`;
const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 250px;
  padding: 1.5rem;
`;
const CardTitle = styled.h1`
  font-size: 1.2rem;
  color: #1b998b;
  font-weight: 400;
`;
const CardDescription = styled.p`
  font-size: 0.9rem;
  color: #222222;
  overflow: scroll;
`;

function Card({ video }) {
  console.log(video);
  return (
    <CardContainer>
      <CardImg src={video.snippet.thumbnails.medium.url} />
      <CardInfo>
        <CardTitle>{video.snippet.title}</CardTitle>
        <CardDescription>{video.snippet.description}</CardDescription>
      </CardInfo>
    </CardContainer>
  );
}

export default Card;
