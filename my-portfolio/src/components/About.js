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
      question: "Education",
      answer: `I have a strong educational background. I graduated from Springside Chestnut Hill Academy in 2022, and now attend Rensselaer
       Polytechnic Institute as a Computer Science Major. I have recently acquired a minor in Economics with the hopes of Double Majoring. My
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
      club/organization I am a current participant in is the Delta Kappa Epsilon Psi Omega fraternity in which I am an active brother and current President.`,
    },

    {
      question: "Travels",
      answer: `As mentioned in the "interests" tab, I enjoy camping, hiking, and going places. There is no better feeling
      than being somewhere you've never been before. I have been lucky enough to experience many of these trips with some of my closest friends.
      In the Summer of 2023, my friend and I camped across the country, hitting an estimated 20 states and 7 National Parks in one month. This past summer we did the
      same kind of trip, the only difference being this trip was focused on the Southeastern United States. Aside from camping, I recently took
      a trip to Prague. Hopefully, I can go back to Europe soon. Many more travels to come!`,
    },

    

  ];

  return (
    <AboutContainer>
      <AboutContent>
        <h1 style={{ marginTop: '50px', marginLeft: '30px' }}>Quick Information About Me</h1>
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