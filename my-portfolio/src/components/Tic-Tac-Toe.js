import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import TicTacToeImage from '../Images/Joe.jpg'; // Replace with your actual image path

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
`;

const TextContainer = styled.div`
  border-top: 2px solid #e0e0e0; 
  flex: 2;
  padding-left: 20px;
`;

const TicTacToe = () => (
  <Container>
    <BackButton to="/projects">Back to Projects</BackButton>
    <Content>
      <ImageContainer>
        <Image src={TicTacToeImage} alt="Tic Tac Toe" />
      </ImageContainer>
      <TextContainer>
        <h2>Tic Tac Toe Machine Learning</h2>
        <p>
         Description on project.
        </p>
        <p>
          
        </p>
      </TextContainer>
    </Content>
  </Container>
);

export default TicTacToe;