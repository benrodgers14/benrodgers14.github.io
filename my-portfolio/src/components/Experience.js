import React from 'react';
import styled from 'styled-components';
import Siemens from '../Images/SiemensLogo.jpg';  
import DKE from '../Images/Psi-Omega-Crest.jpg';  



const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #ffffff;
  min-height: 100vh;
`;

const MainBlurb = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const ExperienceSection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  width: 100%;
  max-width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  border-top: 2px solid #e0e0e0; 
  border-bottom: 2px solid #e0e0e0;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    padding: 10px 0;
  }


`;

const ExperienceSection2 = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  width: 100%;
  max-width: 100%;
  padding-bottom: 20px;
  
  @media (max-width: 800px) {
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
  }
  
  `;

const LogoContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 30px;

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  @media (max-width: 800px) {
    padding-left: 0;
    img {
      max-width: 70vw;
    }
  }
`;

const TextContainer = styled.div`
  flex: 2;
  padding-left: 50px;

  @media (max-width: 800px) {
    padding-left: 0;
    text-align: center;
    width: 100%;
  }
`;

const Experience = () => {
  return (
    <ExperienceContainer>
      <MainBlurb>
        <h1>Professional Experiences</h1>
        <p style={{maxWidth: '800px'}}>I have a very versatile professional background. My computer science major is well utilized, but my on-the-job 
        engineering and business experiences are also put to great use as shown below. 
        </p>

      </MainBlurb>
      <ExperienceSection>
        <LogoContainer>
          <img src={Siemens} alt="Logo" style={{ width: '800px', maxWidth: '110%', height: 'auto' }} />
        </LogoContainer>
        <TextContainer>
          <h2>Siemens</h2>
          <p><span style={{ fontWeight: 'bold' }}>Role(s):</span> Smart Infrastructure Intern, Assembly Technician, Process Improvement and AI Integration Intern</p>
          <p><span style={{ fontWeight: 'bold' }}>Duration:</span> May 2024 - July 2024 & May, July-August 2022, July-August 2023</p>
          <p><span style={{ fontWeight: 'bold' }}>Description:</span> I have a lot of experience in working for Siemens. I started as an Assembly technician in
                        in Harleysville, PA, then worked in Baltimore within their Smart Infrastructure department as an intern for the
                        Summer of 2024. I currently am working remotely for their Johnson City, TN branch as of the Summer of 2025. </p>
        </TextContainer>
      </ExperienceSection>
      <ExperienceSection2>
        <LogoContainer>
          <img src={DKE} alt="Logo" style={{ width: '800px', maxWidth: '70%', height: 'auto' }} />
        </LogoContainer>
        <TextContainer>
          <h2>Delta Kappa Epsilon Psi Omega Chapter</h2>
          <p><span style={{ fontWeight: 'bold' }}>Role(s):</span> President, Philanthropy Chair</p>
          <p><span style={{ fontWeight: 'bold' }}>Duration:</span> May 2024 - Present & May 2023 - May 2024</p>
          <p><span style={{ fontWeight: 'bold' }}>Description:</span> I have a notable amount of professional experience earned through my fraternity. As Philanthropy Chair
                          I worked hard and did extremely well with making local connections and raising the chapter's community
                          service hours. As President, I oversaw all chapter operations and worked multiple hours each day to make sure 
                          everything ran smoothly.</p>
          <p>&nbsp;</p>
          <p><span style={{ fontWeight: 'bold' }}>Roles had, but not described:</span> Academic Chair, Sergeant at Arms, New Member Educator</p>
        </TextContainer>
      </ExperienceSection2>
    </ExperienceContainer>
  );
};

export default Experience;