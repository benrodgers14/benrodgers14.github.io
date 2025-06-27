import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const HeaderContainer = styled.header`
  background-color: rgba(31, 115, 44, 0.68); 
  padding: 0px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1000;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 8px;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 60px;
    height: 60px;
    @media (max-width: 600px) {
      width: 40px;
      height: 40px;
    }
  }

  h1 {
    font-size: 2em;
    margin: 0 10px;
    @media (max-width: 600px) {
      font-size: 1.3em;
      margin: 0 5px;
    }
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
    margin-top: 10px;
  }
`;

const NavItem = styled.div`
  position: relative;
  margin: 0 15px;
  left: 10px;
  color: white;
  font-size: 1.3em;
  cursor: pointer;
  display: flex;
  align-items: center;

  &:hover {
    color: rgba(212, 175, 55, 0.52);
  }

  @media (max-width: 600px) {
    margin: 5px 0;
    left: 0;
    font-size: 1em;
  }
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