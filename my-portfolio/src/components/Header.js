import React from 'react';
import { Link } from 'react-router-dom';
import  { useState } from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: rgba(31, 115, 44, 0.68); 
  padding: 0px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1000;
  flex-wrap: wrap;
  backdrop-filter: blur(12px);
  background: linear-gradient(
    rgba(31, 115, 44, 0.7) 88%,
    rgba(212, 175, 55, 0.18) 100%
  );
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
    margin: 0 8px;
    @media (max-width: 600px) {
      width: 40px;
      height: 40px;
      margin: 0 4px;
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

// const Nav = styled.nav`
//   display: flex;
//   align-items: center;

//   @media (max-width: 600px) {
//     flex-direction: column;
//     width: 100%;
//     align-items: flex-start;
//     margin-top: 10px;
//   }
// `;
const Nav = styled.nav`
  display: flex;
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: column;
    width: 70vw;
    max-width: 300px;
    align-items: flex-start;
    margin-top: 0;
    display: flex;
    background: rgb(212, 175, 55);
    position: absolute;
    top: 138px;
    right: 0; 
    left: auto;
    height: auto; 
    padding: 20px 20px 20px 20px;
    box-shadow: -2px 0 8px rgba(0,0,0,0.15); 
    transform: translateX(${props => (props.open ? '0' : '100%')});
    transition: transform 0.3s ease;
    z-index: 1200;
  }
`;


const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  margin-left: auto;
  margin-right: 10px;
  z-index: 1100;
  position: relative;
  span {
    height: 4px;
    width: 30px;
    background: white;
    margin: 5px 0;
    border-radius: 2px;
    transition: 0.3s;
  }

  @media (max-width: 600px) {
    display: flex;
    
  }
`;


const NavItem = styled.div`
  position: relative;
  margin: 0 10px;
  color: white;
  font-size: 1.8em;
  cursor: pointer;
  display: flex;
  align-items: center;

  &:hover {
    color: rgba(212, 175, 55, 0.52);
  }

  @media (max-width: 600px) {
    margin: 5px 0;
    font-size: 1.5em;
  }
`;

const NavLinkStyled = styled(Link)`
  color: white;
  text-decoration: none;
  position: relative;

  &:hover {
    color: #d4af37;
  }

  &::after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background: #d4af37;
    transition: width 0.3s;
    position: absolute;
    left: 0;
    bottom: -4px;
  }

  &:hover::after {
    width: 100%;
  }
`;
// const HeaderContainer = styled.header`
//   background-color:rgba(31, 115, 44, 0.68); 
//   padding: 0px 20px;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   z-index: 1000;
// `;


// const LogoContainer = styled.div`
//   display: flex;
//   align-items: center;
// `;

// const Nav = styled.nav`
//   display: flex;
//   align-items: center;
// `;

// const NavItem = styled.div`
//   position: relative;
//   margin: 0 15px;
//   left: 10px;
//   color: white;
//   font-size: 1.8em;
//   cursor: pointer;

//   &:hover {
//     color:rgba(212, 175, 55, 0.52); 
//   }

//   /* Show dropdown on hover */
//   &:hover > ul {
//     display: block;
//   }

//   display: flex;
//   align-items: center; /* Center text and caret vertically */
// `;

// const NavLinkStyled = styled(Link)`
//   color: white;
//   text-decoration: none;

//   &:hover {
//     color: #d4af37; /* Optional: change color on hover */
//   }
// `;

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <HeaderContainer>
      <LogoContainer>
        <img src="/BJRLogo.png" alt="Logo" style={{ width: '80px', height: '80px', marginLeft: '10px', marginRight: '10px' }} />
        
        <Link to="/" style={{ textDecoration: 'none' }}>
          <h1 style={{ color: 'white', fontSize: '3em', margin: '0 20px' }}>BJR</h1> {/* Increase font size */}
        </Link>

      </LogoContainer>
      {/* Navigation Links */}
      <Hamburger onClick={() => setMenuOpen(!menuOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>

      <Nav open={menuOpen}>
        <NavItem>
          <NavLinkStyled to="/about" onClick={() => setMenuOpen(false)}>About Me</NavLinkStyled>
        </NavItem>
        <NavItem>
          <NavLinkStyled to="/experience" onClick={() => setMenuOpen(false)}>Experience</NavLinkStyled>
        </NavItem>
        <NavItem>
          <NavLinkStyled to="/projects" onClick={() => setMenuOpen(false)}>Projects</NavLinkStyled>
        </NavItem>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;