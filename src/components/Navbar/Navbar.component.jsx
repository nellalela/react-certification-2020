import React from 'react';
import styled from 'styled-components';
import SearchInput from '../SearchInput/SearchInput.component';

const NavHeader = styled.nav`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  color: #fff;
  padding: 1rem;
  background-color: #1b998b;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  span {
    padding: 0.25rem;
  }
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
  color: #fff;
  margin: 0.5rem 0;
`;
const NavContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  @media (max-width: 360px) {
    margin-left: 1rem;
  }
`;
const Switch = styled.label`
  display: flex;
  border-radius: 9999px;
  height: 22px;
  width: 50px;
  background-color: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.3);
  input {
    display: none;
  }
`;

const Circle = styled.div`
  border-radius: 9999px;
  width: 22px;
  background-color: #fff;
`;
const Avatar = styled.img`
  max-height: 40px;
  width: auto;
  margin: 0.5rem 0 0.5rem 1rem;
`;

function NavBar() {
  return (
    <NavHeader>
      <NavToggle type="button" aria-label="open side menu">
        <img src="./assets/menu.png" alt="menu toggler" />
      </NavToggle>
      <NavTitle>Wizeline Project</NavTitle>
      <SearchInput />
      <NavContainer>
        <Switch>
          <input type="checkbox" />
          <Circle />
        </Switch>
        <span>Dark Mode</span>
        <Avatar src="./assets/avatar.png" alt="avatar" />
      </NavContainer>
    </NavHeader>
  );
}

export default NavBar;
