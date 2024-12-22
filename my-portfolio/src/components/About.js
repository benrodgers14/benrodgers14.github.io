import React, { useState } from 'react';
import styled from 'styled-components';
import Memphis from '../Images/Memphis.jpg'; 

// FAQ Page main container styling
const AboutContainer = styled.div`
  display: flex;
  flex-direction: row; /* Change to row to position items horizontally */
  align-items: flex-start; /* Align items to the top */
  justify-content: space-between; /* Space out items to push the image to the right */
  color: #333;
  min-height: 100vh;
  padding: 10px;
  background-color: #ffffff;
`;

const AboutContent = styled.div`
  width: 100%;
  max-width: 700px; /* Adjust width to make it smaller */
  text-align: center; /* Center the header text */
`;

const AboutSection = styled.section`
  width: 100%;
  margin-top: 20px;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

// Styled components for the dropdown
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
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')}; /* Toggle display based on isOpen prop */
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end; /* Align image to the right */
  align-items: flex-start; /* Align image to the top */
`;

// AboutItem component
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
      question: "Who am I?",
      answer: "Benjamin Rodgers.",
    },
  ];

  return (
    <AboutContainer>
      <AboutContent>
        <h1 style={{ marginTop: '50px', marginLeft: '30px' }}>Quick Information On Me</h1>
        <AboutSection style={{ marginLeft: '30px' }}>
          {AboutData.map((about, index) => (
            <AboutItem key={index} question={about.question} answer={about.answer} />
          ))}
        </AboutSection>
      </AboutContent>
      <ImageContainer>
        <img src={Memphis} alt="Description" style={{marginRight: '30px', marginTop: '60px' , width: '70%', maxWidth: '600px', height: 'auto' }} />
      </ImageContainer>
    </AboutContainer>
  );
};

export default About;