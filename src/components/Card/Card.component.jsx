import React from 'react';
import {
  CardContainer,
  CardImg,
  CardInfo,
  CardTitle,
  CardDescription,
} from './Card.styled';

function Card({ url, title, description }) {
  return (
    <CardContainer>
      <CardImg src={url} />
      <CardInfo>
        <CardTitle data-testid="card-title">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardInfo>
    </CardContainer>
  );
}

export default Card;
