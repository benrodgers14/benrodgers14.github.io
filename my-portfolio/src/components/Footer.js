import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #907A4B; 
  padding: 1rem;
  text-align: center;
  color: white;
  position: relative;
  bottom: 0;
  width: 100%;
  background: linear-gradient(
   #3B2E1E 5%,
    #907A4B  18%
   
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