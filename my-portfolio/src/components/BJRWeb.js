import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';



const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Align items to the top */
  padding: 20px;
  background-color: #ffffff;
  min-height: 100vh;
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
  align-items: flex-start; /* Align items to the top */
  width: 100%;
`;

const ImageContainer = styled.div`
  border-top: 2px solid #e0e0e0; 
  flex: 1;
  display: flex;
  justify-content: flex-start; /* Align image to the left */
  align-items: flex-start; /* Align image to the top */
`;

const Image = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 8px;
  padding: 20px;
`;

const TextContainer = styled.div`
  border-top: 2px solid #e0e0e0; 
  flex: 2;
  padding-left: 20px;
`;

const BJRWeb = () => (
  <Container>
    <BackButton to="/projects">Back to Projects</BackButton>
    <Content>
      <ImageContainer>
        <Image src={"/BJRLogo.png"} alt="Arch" />
      </ImageContainer>
      <TextContainer>
        <h2>Website of Benjamin Rodgers</h2>
        <p>
           Welcome! This project is what you are currently viewing. It is a React application that serves as
 a portfolio for me. This is meant to showcase my projects, interests, and skills. Thanks for visiting!
 To view the open-source code for this project, please follow the link below.       
        </p>

        <p>
        <a href="https://github.com/benrodgers14/benrodgers14.github.io" target="_blank" rel="noopener noreferrer">
            GitHub Repository
        </a>
        </p>



      </TextContainer>



    </Content>
  </Container>
);

export default BJRWeb;