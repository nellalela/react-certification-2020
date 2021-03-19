import React from 'react';
import styled from 'styled-components';
import SearchInput from '../SearchInput/SearchInput.component';

const NavHeader = styled.nav`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  /* justify-content: flex-start; */
  padding: 1rem;
  /* background-color: #2D3047; */
  background-color: #1b998b;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
`;
const NavToggle = styled.button`
  background-color: transparent;
  border: none;
  margin: auto 1rem;
  img {
    max-height: 1.5rem;
  }
`;
const NavTitle = styled.p`
  font-size: 1.5rem;
  font-style: italic;
  font-weight: 300;
  vertical-align: middle;
  color: white;
  margin: 0.5rem 0;
`;

function NavBar() {
  return (
    <NavHeader>
      <NavToggle type="button">
        <img src="./assets/menu.png" alt="menu toggler" />
      </NavToggle>
      <NavTitle>Wizeline Project</NavTitle>
      <SearchInput />
    </NavHeader>
  );
}

export default NavBar;
