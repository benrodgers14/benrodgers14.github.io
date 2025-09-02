import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PsiOmega from '../Images/Psi-Omega-Crest.jpg'; 

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
  max-height: 600px;
  height: auto;
  border-radius: 8px;
  padding: 0;
  object-fit: contain;  
  border: 4px solid #907A4B; // Brown border
  background-color: #ffffff;

  @media (max-width: 800px) {
    max-width: 90vw;
    max-height: 200px;
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
  max-width: 630px;
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
  margin: 12px 0 8px 0; 
`;

const DKEWebsite = () => (
  <Container>
    <BackButton to="/projects">Back to Projects</BackButton>
    <Content>
      <ImageContainer>
        <Image src={PsiOmega} alt="Crest" />
      </ImageContainer>
      <TextContainer>
        <TitleWrapper>
          <h2 style={{ marginBottom: 0 }}>Delta Kappa Epsilon Psi Omega Fraternity Website</h2>
          <Accent />
        </TitleWrapper>
        <p>
         A project completed by a small group of my Fraternity and I.
        </p>
        <p>
          To keep up with the modern times of social media marketing, we found it necassary to create a website
          for all of campus to view. We knew that a high quality website would be a great way to get our name out
          to the student body.
        </p>
        <p>
          This project was done over our Fall 2024 Semester. My focus in this project was to play a large part in designing the 
          back-end systems for the website, as well as help design the front-end if needed. During this time, I learned 
          more about how AWS works, as the website is hosted on an EC2 instance. Furthermore, I helped resolve issues
          when the website would crash or break. Our back-end also contains a database that can store calendar details and 
          has an admin page that allows dynamic updates to the mentioned calendar.
        </p>
        <p>
          If you want to view the open source code for this project, please visit the GitHub repository linked below. Otherwise feel free to visit the 
          actual website at <a href="https://dekesrpi.org/" target="_blank" rel="noopener noreferrer">dkesrpi.org</a>.
        </p>
        <p>
        <a href="https://github.com/NBelgaonkar/Psi-Omega-Site" target="_blank" rel="noopener noreferrer">
            GitHub Repository
        </a>
        </p>
      </TextContainer>
    </Content>
  </Container>
);

export default DKEWebsite;