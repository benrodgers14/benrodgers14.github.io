import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import TicTacToeImage from '../Images/Joe.jpg'; 
import TicTacToeReport from '../documents/Tic-Tac-Joe-WriteUp.pdf'; 

const BackButton = styled(Link)`
  align-self: flex-start;
  margin-bottom: 20px;
  padding: 10px 20px;
  background-color:rgb(255, 255, 255);
  color: black;
  text-decoration: none;
  border: 2px solid #3b2e1e;
  border-radius: 2px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color:rgb(198, 198, 198);
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 20px;
  background-color: #E6DEB9;
  min-height: 100vh;

  @media (max-width: 800px) {
    padding: 10px;
  }
`;

const Content = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;

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

  @media (max-width: 800px) {
    width: 100%;
    margin-bottom: 16px;
    justify-content: center;
    align-items: center;
  }
`;

const Image = styled.img`
  width: 100%;
  max-width: 800px;
  height: auto;
  border-radius: 8px;
  object-fit: contain;
  border: 4px solid #907A4B; 

  @media (max-width: 800px) {
    max-width: 100%;
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

const TitleWrapper = styled.div`
  display: block;
  max-width: 420px;
  margin-bottom: 0;
  text-align: left;

  @media (max-width: 800px) {
    margin: 0 auto;
    text-align: center;
  }
`;

const Accent = styled.div`
  height: 4px;
  background: #907A4B;
  border-radius: 2px;
  width: 100%;
  margin: 12px 0 8px 0; // Reduced bottom margin
`;

const TicTacToe = () => (
  <Container>
    <BackButton to="/projects">Back to Projects</BackButton>
    <Content>
      <ImageContainer>
        <Image src={TicTacToeImage} alt="Tic Tac Toe" />
      </ImageContainer>
      <TextContainer>
        <TitleWrapper>
          <h2 style={{ marginBottom: 0 }}>Tic Tac Toe Machine Learning</h2>
          <Accent />
        </TitleWrapper>
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