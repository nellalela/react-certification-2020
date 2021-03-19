import React from 'react';
import styled from 'styled-components';

const Search = styled.input`
  display: flex;
  border: none;
  background: url('./assets/search.png') no-repeat scroll 7px 7px;
  padding: auto 30px;
  background-size: 20px 20px;
  background-color: rgba(255, 255, 255, 0.15);
  margin: auto 1rem;
`;

function SearchInput() {
  return <Search type="text" />;
}
export default SearchInput;
