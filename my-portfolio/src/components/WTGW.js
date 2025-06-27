import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import WTGWArch from '../Images/ArchWTGW.jpg'; 


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

const WTGW = () => (
  <Container>
    <BackButton to="/projects">Back to Projects</BackButton>
    <Content>
      <ImageContainer>
        <Image src={WTGWArch} alt="Arch" />
      </ImageContainer>
      <TextContainer>
        <h2>When To Go Where - A National Parks Ontology</h2>
        <p>
         A project completed during my time taking the Ontologies course at Rensselaer Polytechnic Institute under Dr. Deborah McGuinness.
          
        </p>
        <p>
            Choosing the right national park to visit can be challenging due to factors
            such as temperature, trails, and crowd levels, which can all significantly
            impact the experience. With the variety of environments and conditions found
            across national parks, adventurers often struggle to find a park that suits 
            their preferences. This project aims to develop a recommendation system that 
            helps users select the ideal national park based on specific preferences, such 
            as preferred temperature, trail type, and less crowded times. Integrating data 
            into the system will provide tailored recommendations that simplify the park selection process. 
            This tool is intended to make it easier for adventurers to find a park that meets their needs, 
            ultimately enhancing their outdoor experiences.
        </p>

        <p>
          This project was executed in a group of 4 students. Each of us worked hard to make this Ontology
          as complete and robust as possible. Key features of this Ontology include a webscraper, ranking systems,
          and high-level conceptual models for each of the United States National Parks.
        </p>

        <p>
          If you want to view the open source code for this project, please visit the GitHub repository linked below. Otherwise feel free to visit the 
          actual website at <a href="https://tetherless-world.github.io/ontology-engineering/oe2024/when-to-go-where/" target="_blank" rel="noopener noreferrer">When To Go Where Website</a>.
        </p>
        <p>
        <a href="https://github.com/tetherless-world/ontology-engineering/tree/when-to-go-where" target="_blank" rel="noopener noreferrer">
            GitHub Repository
        </a>
        </p>



      </TextContainer>



    </Content>
  </Container>
);

export default WTGW;