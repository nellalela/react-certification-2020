import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 28%;
  background-color: #fff;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
  margin: 0.8rem 0;
  height: 450px;
`;

const CardImg = styled.img`
  height: 160px;
  width: auto;
  min-width: 284px
`;
const CardTitle = styled.h1`
  font-size: 1.2rem;
  margin: 1.5rem;
  color: #1b998b;
  font-weight: bold;
`;
const CardDescription = styled.p`
  font-size: 0.9rem;
  margin: 0 1.5rem;
  color: #222222;
`;


function Card({ video }) {
  console.log(video);
  return (
    <CardContainer>
      <CardImg src={video.snippet.thumbnails.medium.url} />
      <CardTitle>{video.snippet.title}</CardTitle>
      <CardDescription>{video.snippet.description}</CardDescription>
    </CardContainer>
  );
}

export default Card;
