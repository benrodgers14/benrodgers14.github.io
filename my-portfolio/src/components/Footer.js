import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: rgba(31, 115, 44, 0.68); 
  padding: 0rem;
  text-align: center;
  color: white;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; {new Date().getFullYear()} Benjamin J. Rodgers. All rights reserved.</p>
    </FooterContainer>
  );
};

export default Footer;