import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  padding: 0;
  border: 4px solid #907A4B;

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
const Accent = styled.div`
  height: 4px;
  background: #907A4B;
  border-radius: 2px;
  width: 100%;
  margin: 12px 0 8px 0;
`;


const TitleWrapper = styled.div`
  display: inline-block;
  text-align: left;
  margin-bottom: 0;
`;

const BJRWeb = () => (
  <Container>
    <BackButton to="/projects">Back to Projects</BackButton>
    <Content>
      <ImageContainer>
        <Image src={"/BJRLogo.png"} alt="Arch" />
      </ImageContainer>
      <TextContainer>
        <TitleWrapper>
            <h2 style={{ marginBottom: 0 }}>Website of Benjamin Rodgers</h2>
            <Accent />
          </TitleWrapper>
        <p>
           Welcome! This project is what you are currently viewing. It is a React application that serves as
 a portfolio for me. This is meant to showcase my projects, interests, and skills. Thanks for visiting!
   
        </p>

        <p>

        </p>



      </TextContainer>



    </Content>
  </Container>
);

export default BJRWeb;