import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import TicTacToeImage from '../Images/Joe.jpg'; 
import TicTacToeReport from '../documents/Tic-Tac-Joe-WriteUp.pdf'; 

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
         A project worked on and executed by Theodore Tasman of Penn State University and I.
          
        </p>
        <p>
          Taking inspiration from the 1983 classic, WarGames, we decided to see if we could replicate the Tic-Tac-Toe learning machine using our knowledge and research. This project required hours of research and lots of trial and error, as we had not worked on or learned machine learning before.

          While Tic-Tac-Toe represents a straightforward application due to its solved nature, our primary objective was to implement a deep-learning model as a learning exercise and a proof of concept for future, more intricate challenges.

        </p>

        <p>
          This project was a great learning experience. To view the project in further detail, please visit the GitHub repository linked below along with the attached PDF Report.
        

        </p>

        <a href={TicTacToeReport} target="_blank" rel="noopener noreferrer">
          Tic-Tac-Toe PDF Report
        </a>

        <p>
        <a href="https://github.com/tedtasman/tic-tac-joe" target="_blank" rel="noopener noreferrer">
            GitHub Repository
        </a>
        </p>



      </TextContainer>



    </Content>
  </Container>
);

export default TicTacToe;