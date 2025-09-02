import React from 'react';
import styled from 'styled-components';
import LighthouseSmile from '../Images/LighthouseSmile.jpg';
import SouthCarolina from '../Images/SouthCarolina.JPG';


const MainContainer = styled.main`
  width: 100%;
  min-height: 100vh;
  display: flex;
  padding: 0 ;
  flex-direction: column;
  background-color: #E6DEB9; //Can switch back to white
  align-items: center;
  justify-content: flex-start;
  padding: 0;
  overflow: hidden;
`;

const HeroSection = styled.div`
  position: relative;
  width: 100%;
  min-height: 350px;
  height: 100vh;
  max-height: 1000px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  

  @media (max-width: 800px) {
    height: 40vh;
    min-height: 220px;
    max-height: 600px;
  }

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      rgba(75, 107, 60, 0.5), 
      rgba(75, 107, 60, 0.5)
    );
    z-index: 1;
  }

  img {
    width: 100vw;
    height: 100%;
    min-height: 40%;
    min-width: 40%;
    object-fit: cover;
    object-position: center 35%;
    filter: brightness(0.75) grayscale(0.1);
    position: absolute;
    inset: 0;
    z-index: 0;
  }
`;

const HeroText = styled.div`
  position: relative;
  z-index: 2;
  color: #f3eac3ff;
  text-align: center;
  width: 100%;
  padding: 0 20px;
  margin-top: 80px; 

  h2 {
    font-size: 3.5em;
    margin-bottom: 0.2em;
    text-shadow: 0 2px 8px rgba(0,0,0,0.5);
    @media (max-width: 600px) {
      font-size: 2em;
    }
  }
  p {
    font-size: 1.5em;
    text-shadow: 0 2px 8px rgba(0,0,0,0.4);
    margin: 0;
    @media (max-width: 600px) {
      font-size: 1em;
    }
  }
  span.name {
    font-size: 1.75em;
    font-weight: bold;
    display: block;
    margin: 0.2em 0;
    text-shadow: 0 2px 8px rgba(0,0,0,0.5);
    @media (max-width: 600px) {
      font-size: 1.3em;
    }
  }
`;
// const ContentContainer = styled.div`
//   text-align: center;
//   margin-top: 40px;
//   max-width: 800px;
// `;

const ExpectSection = styled.section`
  width: 100%;
  max-width: 800px;
  margin: 40px auto 0 auto;
  // padding: 32px 20px;
  background: #E6DEB9;
  border-radius: 16px;

  text-align: center;

  h3 {
    font-size: 2em;
    margin-bottom: 0.5em;
    color: #3B2E1E;
  }
  p {
    font-size: 1.2em;
    color: #333;
    margin-bottom: 0.5em;
  }
`;


const SectionsRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: 48px;
  margin: 40px auto 0px auto;
  width: 90vw;
  max-width: 1400px;

  @media (max-width: 1000px) {
    gap: 24px;
    width: 98vw;
    max-width: 75vw;
    max-height: 75%;
  }
  @media (max-width: 800px) {
    flex-direction: column;
    gap: 20px;
    align-items: center;
    width: 100vw;
  }
    

  }
`;

const SectionCard = styled.div`
  flex: 1;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 2px 16px rgba(59, 46, 30, 0.43);
  padding: 64px 32px;
  text-align: center;
  min-width: 0;
  justify-content: flex-start; 
  
  h4 {
    font-size: 1.8em;
    color: #3B2E1E;
    margin-bottom: 0.7em;
    font-weight: 700;
    margin-top: 0;  
  }
  p {
    font-size: 1.15em;
    color: #333;
    margin: 0;
    line-height: 1.5;
  }
`;


const BottomImageContainer = styled.div`
  width: 90vw;
  max-width: 1400px;
  margin: 96px auto 48px auto;
  padding-bottom: 48px;

  @media (max-width: 1000px) {
    width: 98vw;
    max-width: 100vw;
  }
  @media (max-width: 800px) {
    width: 100vw;
    padding-bottom: 32px;
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    display: block;
    filter: brightness(0.8);
  }
`;


const Caption = styled.figcaption`
  text-align: left;
  color: #3B2E1E;
  font-size: .9em;
  margin-top: 12px;
  font-style: italic;
`;

const Main = () => (
  <MainContainer>
    <HeroSection>
      <img src={LighthouseSmile} alt="Description"  />
      <HeroText>
        <h2>Welcome!</h2>
        <p>
          <span className="name">I'm Benjamin Rodgers,</span>a hardworking computer science and economics student at Rensselaer Polytechnic Institute.
        </p>
      </HeroText>
    </HeroSection>
    <ExpectSection>
      <h3>What You'll Find Here</h3>
      {/* <p>
        This site is a portfolio of my work, interests, and experiences. You’ll find projects, background info, and ways to connect.
      </p>
      <p>
        Scroll down to explore more, and check back for updates as I continue to grow and learn!
      </p> */}
    </ExpectSection>
    <SectionsRow>
      <SectionCard>
        <h4>About Me</h4>
        <p>Learn more about who I am and intend to be.</p>
      </SectionCard>
      <SectionCard>
        <h4>Experience</h4>
        <p>See my academic, professional, and extracurricular experiences.</p>
      </SectionCard>
      <SectionCard>
        <h4>Projects</h4>
        <p>Take a look at the projects I’ve worked on and what I’m creating next.</p>
      </SectionCard>
       
    </SectionsRow>
    <BottomImageContainer>
      <img src={SouthCarolina} alt="Description" />
      <Caption>South Carolina, Summer 2024</Caption>
    </BottomImageContainer>
  </MainContainer>
);

export default Main;