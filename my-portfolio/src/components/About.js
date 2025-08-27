import React, { useState } from 'react';
import styled from 'styled-components';
import Wilderness from '../Images/Wilderness.JPG';

// FAQ Page main container styling
const AboutContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  color: #333;
  min-height: 100vh;
  padding: 10px;
  background-color: #fff;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: stretch;
    padding: 5px;
  }
`;

const AboutContent = styled.div`
  flex: 2;
  text-align: center;
  margin-right: 32px;
  max-width: 50%; 

  @media (max-width: 800px) {
    margin-right: 0;
    margin-bottom: 16px;
    max-width: 100%;
  }
`;

const AboutSection = styled.section`
  width: 100%;
  margin-top: 20px;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  @media (max-width: 600px) {
    margin-left: 0 !important;
    margin-right: 0 !important;
    margin: 20px auto 0 auto;
    width: 95vw;
  }

`;


const Question = styled.h3`
  margin: 0;
  padding: 15px 20px;
  font-size: 1.2rem;
  background-color:rgba(253, 255, 181, 0.6);
  border-bottom: 1px solid #e0e0e0;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color:rgba(212, 175, 55, 0.52);
  }
`;

const Answer = styled.p`
  margin: 0;
  padding: 15px 20px;
  font-size: 1rem;
  background-color: #ffffff;
  border-bottom: 1px solid #e0e0e0;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')}; 
  
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;

  img {
    width: 100%;
    max-width: 1200px;
    height: auto;
    margin-top: 50px; 
    margin-left: 0;
    margin-right: 0;
    @media (max-width: 800px) {
      max-width: 90vw;
      margin: 20px auto 0 auto;
      display: block;
    }
  }

  @media (max-width: 800px) {
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;


const AboutItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Question onClick={toggleOpen}>{question}</Question>
      <Answer isOpen={isOpen}>{answer}</Answer>
    </div>
  );
};

// About component
const About = () => {
  const AboutData = [
    {
      question: "Education",
      answer: `I have a strong educational background. I graduated from Springside Chestnut Hill Academy in 2022, and now attend Rensselaer
       Polytechnic Institute as a Computer Science and Economics Dual Major with a concentration in Artificial Intelligence and Data. Speaking for the economics degree, I have a strong interest in labor economics. My
       intended graduation date is Spring 2026.`,
    },
    {
      question: "Interests",
      answer: `When not occupied by school or work, I have many hobbies and interests. I taught myself how to play guitar
      as a middle-schooler and play frequently - most often something by Bob Dylan. I am an avid adventurer and love to travel. See the travels tab for more information.
      Sports, philosophy, and exercising are also passions of mine.`,
    },

    {
      question: "Extracurriculars",
      answer: `I was a heavy participant in extracurriculars in high school, but now in college, my time is more valuable. The only
      club/organization I am a current participant in is the Delta Kappa Epsilon Psi Omega fraternity in which I am an active brother and former President.`,
    },

    {
      question: "Travels",
      answer: `As mentioned in the "Interests" tab, I enjoy camping, hiking, and exploring new places. There is no better feeling
      than being somewhere you've never been before. I have been lucky enough to experience many of these trips with some of my closest friends.
      In the Summer of 2023, my friend and I camped across the country, hitting an estimated 20 states and 7 National Parks in one month. In the Summer of 2024 we did the
      same kind of trip, the only difference being this trip was focused on the Southeastern United States. Backpacking is also something 
      I have been working on. My most recent trip entailed journerying through the mountains of the Washakie Wilderness of the Shoshone National Forest. Many more travels to come!`,
    },

    

  ];

  return (
    <AboutContainer>
      <AboutContent>
      <h1 style={{ marginTop: '50px' }}>Quick Information About Me</h1>
      <AboutSection>
        {AboutData.map((about, index) => (
          <AboutItem key={index} question={about.question} answer={about.answer} />
        ))}
      </AboutSection>
      </AboutContent>
      <ImageContainer>
        <img src={Wilderness} alt="Description" />
      </ImageContainer>
    </AboutContainer>
  );
};

export default About;