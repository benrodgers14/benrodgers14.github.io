import React from 'react';
import styled from 'styled-components';
import LighthouseSmile from '../Images/LighthouseSmile.jpg'; 

const MainContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const ImageContainer = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentContainer = styled.div`
  flex: 2;
  padding: 50px;
`;

const Main = () => (
  <MainContainer>
    <ImageContainer>
      <img src={LighthouseSmile} alt="Description" style={{ width: '100%', maxWidth: '1000px', height: 'auto' }} />
    </ImageContainer>
    <ContentContainer>
      <section id="Main">
        <h2>Welcome!</h2>
        <p>You have reached the website dedicated to the personal portfolio of Benjamin Rodgers. 
        </p>
      </section>
      
      <section id="Dev">
          <h2 style={{ color: 'red', marginTop: '80px'  }}>Development Notice</h2>
          <p>This website is currently under development. Check periodically for updates.</p>
      </section>


    </ContentContainer>
  </MainContainer>
);

export default Main;