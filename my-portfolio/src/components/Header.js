import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const HeaderContainer = styled.header`
  background-color:rgba(31, 115, 44, 0.68); 
  padding: 0px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1000;
`;


const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

const NavItem = styled.div`
  position: relative;
  margin: 0 15px;
  left: 10px;
  color: white;
  font-size: 1.8em;
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
      <LogoContainer>
        <img src="/BJRLogo.png" alt="Logo" style={{ width: '80px', height: '80px', marginLeft: '10px', marginRight: '10px' }} />
        
        <Link to="/" style={{ textDecoration: 'none' }}>
          <h1 style={{ color: 'white', fontSize: '3em', margin: '0 20px' }}>BJR</h1> {/* Increase font size */}
        </Link>

      </LogoContainer>
      {/* Navigation Links */}
      <Nav>

        <NavItem>
          <NavLinkStyled to="/about">About Me</NavLinkStyled>
        </NavItem>

        <NavItem>
          <NavLinkStyled to="/experience">Experience</NavLinkStyled>
        </NavItem>

        <NavItem>
          <NavLinkStyled to="/projects">Projects</NavLinkStyled>
        </NavItem>

       

      </Nav>
    </HeaderContainer>
  );
};

export default Header;