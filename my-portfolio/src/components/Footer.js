import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: rgba(31, 115, 44, 0.68); 
  padding: 1rem;
  text-align: center;
  color: white;
  position: relative;
  bottom: 0;
  width: 100%;
  background: linear-gradient(
   rgba(212, 175, 55, 0.18) 5%,
    rgba(31, 115, 44, 0.7) 18%
   
  ); 
    @media (max-width: 600px) {
    padding: 0.7rem 0.2rem;
    font-size: 0.95em;
  }



  `;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; {new Date().getFullYear()} Benjamin J. Rodgers. All rights reserved.</p>
    </FooterContainer>
  );
};

export default Footer;