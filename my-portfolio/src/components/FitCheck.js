import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import FitCheckLogo from '../Images/FitCheckLogo.jpg'; 


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Align items to the top */
  padding: 20px;
  background-color: #ffffff;
  min-height: 100vh;

  @media (max-width: 600px) {
    padding: 10px;
    align-items: stretch;
  }
`;

const BackButton = styled(Link)`
  align-self: flex-start;
  margin-bottom: 20px;
  padding: 10px 20px;
  background-color:rgb(255, 255, 255);
  color: black;
  text-decoration: none;
  border: 2px solid black;
  border-radius: 2px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color:rgb(198, 198, 198);
  }
`;

const Content = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  /* Remove max-width and margin: 0 auto */

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  /* Remove border-top and margin-right */

  @media (max-width: 800px) {
    width: 100%;
    margin-bottom: 16px;
    justify-content: center;
    align-items: center;
  }
`;

const Image = styled.img`
  width: 100%;
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  padding: 0;

  @media (max-width: 800px) {
    max-width: 100%;
    padding: 0;
  }
`;

const TextContainer = styled.div`
  flex: 2;
  padding-left: 32px;

  @media (max-width: 800px) {
    padding-left: 0;
    width: 100%;
    text-align: center;
  }
`;

const FitCheck = () => (
  <Container>
    <BackButton to="/projects">Back to Projects</BackButton>
    <Content>
      <ImageContainer>
        <Image src={FitCheckLogo} alt="Arch" />
      </ImageContainer>
      <TextContainer>
        <h2>FitCheck</h2>
        <p>
          This was a project worked on during the Spring of 2025 by a team of four students from my Institute. This project was designed to be
          an application that would allow users to generate outfits based on their style preferences. In essence, it is an online closet that
          provides outfit suggestions. Key features included an outfit generator, a closet management system, and user management features. This project
          took a lot of time and effort to complete, but it was a great learning experience.       
        </p>

        <p>
        </p>



      </TextContainer>



    </Content>
  </Container>
);

export default FitCheck;