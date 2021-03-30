import React from 'react';
import SearchInput from '../SearchInput/SearchInput.component';
import {
  NavHeader,
  NavToggle,
  NavTitle,
  NavContainer,
  Switch,
  Circle,
  Avatar,
} from './Navbar.styled';

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
