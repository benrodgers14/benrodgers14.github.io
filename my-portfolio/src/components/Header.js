import React from 'react';
import { Link } from 'react-router-dom';
import  { useState } from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  width: 100;
  background-color: #907A4B; 
  padding: 0px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1000;
  flex-wrap: wrap;
  backdrop-filter: blur(12px);
  background: linear-gradient(
    #907A4B 88%,
    #3B2E1E 100%
  );
  @media (max-width: 600px) {
    height: 60px;    
    align-items: center;
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
      display: none;
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
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;

    background: #3b2e1e;
    padding: 14px 20px;

    transform-origin: top;
    transform: scaleY(${props => (props.open ? 1 : 0)});
    opacity: ${props => (props.open ? 1 : 0)};
    transition: transform 220ms ease, opacity 200ms ease;
    pointer-events: ${props => (props.open ? 'auto' : 'none')};

    flex-direction: column;
    align-items: stretch;
    gap: 10px;
    z-index: 1200;

    > div {
      transform: translateY(${props => (props.open ? '0' : '-6px')});
      opacity: ${props => (props.open ? 1 : 0)};
      transition: transform 240ms ease, opacity 240ms ease;
    }
    > div:nth-child(1) { transition-delay: ${props => (props.open ? '60ms' : '0ms')}; }
    > div:nth-child(2) { transition-delay: ${props => (props.open ? '120ms' : '0ms')}; }
    > div:nth-child(3) { transition-delay: ${props => (props.open ? '180ms' : '0ms')}; }
  }
`;


const Hamburger = styled.button`
  display: none;
  background: transparent;
  border: 0;
  padding: 10px;              
  margin-left: auto;
  margin-right: 10px;
  z-index: 1100;
  position: relative;
  cursor: pointer;

  @media (max-width: 600px) {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  span {
    width: 28px;
    height: 3px;
    background: #fff;
    border-radius: 2px;
    display: block;
    position: relative;
    transition: transform .3s ease, opacity .2s ease;
  }
  span + span { margin-top: 6px; }

  &[aria-expanded="true"] span:nth-child(1) {
    transform: translateY(9px) rotate(45deg);
  }
  &[aria-expanded="true"] span:nth-child(2) {
    opacity: 0;
  }
  &[aria-expanded="true"] span:nth-child(3) {
    transform: translateY(-9px) rotate(-45deg);
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
    color: #54320f;
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
    color: #E6DEB9;
  }

  &::after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background: #3B2E1E;
    transition: width 0.3s;
    position: absolute;
    left: 0;
    bottom: -4px;
  }

  &:hover::after {
    width: 100%;
  }
`;

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <HeaderContainer>
      <LogoContainer>
        <img src="/BJRLogo.png" alt="Logo" style={{ width: '80px', height: '80px', marginLeft: '10px', marginRight: '10px' }} />
        
        <Link to="/" style={{ textDecoration: 'none' }}>
          <h1 style={{ color: '#3B2E1E', fontSize: '3em', margin: '0 20px' }}>BJR</h1> {/* Increase font size */}
        </Link>

      </LogoContainer>
      <Hamburger
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
      >
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