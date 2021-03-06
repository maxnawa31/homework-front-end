import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.div`
  height: 10vh;
  background-color: black;
  display: flex;
  flex-direction: row;
`;
const StyledList = styled.ul`
  list-style: none;
  font-size: 1.25em;
  color: white;
`;

const Navbar = props => (
  <NavbarContainer>
    <StyledList />
  </NavbarContainer>
);

export default Navbar;
