import React from 'react';
import { Link } from 'react-router-dom'; 
import styled from 'styled-components';
import Joe from '../Images/Joe.jpg'; // Replace with your actual project image paths
import DKE from '../Images/Psi-Omega-Crest.jpg'; // Replace with your actual project image paths
import WTGW from '../Images/ArchWTGW.jpg'; // Replace with your actual project image paths

const ProjectsContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #ffffff;
  min-height: 100vh;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 40px;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 100%;
  max-width: 800px;
`;

const ProjectCard = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: inherit;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  padding-top: 100%; /* 1:1 Aspect Ratio */
  position: relative;
  background-color: #f0f0f0;
  border-radius: 8px;
  overflow: hidden;
`;

const Image1 = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 95%;
  height: 95%;
  object-fit: cover; /* Crop the image */
  object-position: 50% 30px; /* Move the image lower */
  transform: scale(1.35); /* Zoom in the image */

`;

const Image2 = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-position: 50% 50%; /* Center the image */
  transform: scale(1); /* Adjust the scale as needed */
`;

const Image3 = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Crop the image */
  object-position: 50% 50%;
`;

const Label = styled.p`
  text-align: center;
  margin-top: 10px;
`;

const Projects = () => (
  <ProjectsContainer>
    <Header>
      <h2>Projects</h2>
      <p>Here are some of the projects I've worked on. Click on each image to learn more about the project.</p>
    </Header>
    <ProjectsGrid>
      <ProjectCard as={Link} to="/Tic-Tac-Toe">
        <ImageContainer>
          <Image1 src={Joe} alt="Project 1" />
        </ImageContainer>
        <Label>Tic-Tac-Toe Machine Learning</Label>
      </ProjectCard>
      <ProjectCard as={Link} to="/DKE-Website">
        <ImageContainer>
          <Image2 src={DKE} alt="Project 2" />
        </ImageContainer>
        <Label>Delta Kappa Epsilon Website</Label>
      </ProjectCard>
      <ProjectCard as={Link} to="/WTGW">
        <ImageContainer>
          <Image3 src={WTGW} alt="Project 3" />
        </ImageContainer>
        <Label>When To Go Where - A National Parks Ontology</Label>
      </ProjectCard>
      <ProjectCard as={Link} to="/BJR">
        <ImageContainer>
          <Image3 src="/BJRLogo.png" alt="Logo" />
        </ImageContainer>
        <Label>Website of BJR - A Personal Website</Label>
      </ProjectCard>
    </ProjectsGrid>
  </ProjectsContainer>
);

export default Projects;