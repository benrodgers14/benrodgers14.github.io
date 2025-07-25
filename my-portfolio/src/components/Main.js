import React from 'react';
import styled from 'styled-components';
import LighthouseSmile from '../Images/LighthouseSmile.jpg'; 

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  flex: 1; /* Ensure it takes up the remaining space */
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const ContentContainer = styled.div`
  text-align: center;
`;

const Main = () => (
  <MainContainer>
    <ContentContainer>

      <ImageContainer>
        <img src={LighthouseSmile} alt="Description" style={{ width: '80%', maxWidth: '800px', height: 'auto' }} />
      </ImageContainer>
      <section id="Main">
        <h2>Welcome!</h2>
        <p>You have reached the website dedicated to the personal portfolio of Benjamin Rodgers.</p>
      </section>
        <section id="Dev">
        <p>This website is a constantly being developed and will continue to change as I do. Feel free to suggest edits or ideas for future updates!</p>
      </section>
    </ContentContainer>
  </MainContainer>
);

export default Main;