import React from 'react';
// import styled from 'styled-components';

function Card({video}) {
  console.log(video)
  return (
    <div className="card">
      <h1>{video.snippet.title}</h1>
      <p>{video.snippet.description}</p>
    </div>
  );
}

export default Card;
