import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const HeaderContainer = styled.header`
  background-color:rgba(31, 115, 44, 0.68); 
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1000;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

const NavItem = styled.div`
  position: relative;
  margin: 0 15px;
  color: white;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    color: #d4af37; /* Optional: change color to indicate clickable */
  }

  /* Show dropdown on hover */
  &:hover > ul {
    display: block;
  }

  display: flex;
  align-items: center; /* Center text and caret vertically */
`;

const NavLinkStyled = styled(Link)`
  color: white;
  text-decoration: none;

  &:hover {
    color: #d4af37; /* Optional: change color on hover */
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      

      {/* Navigation Links */}
      <Nav>
        <NavItem>
          <NavLinkStyled to="/">Home</NavLinkStyled>
        </NavItem>

        <NavItem>
          <NavLinkStyled to="/about">About</NavLinkStyled>
        </NavItem>

        <NavItem>
          <NavLinkStyled to="/projects">Projects</NavLinkStyled>
        </NavItem>

      </Nav>
    </HeaderContainer>
  );
};

export default Header;