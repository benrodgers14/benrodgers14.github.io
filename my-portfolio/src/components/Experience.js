import React from 'react';
import styled from 'styled-components';
import Siemens from '../Images/SiemensLogo.jpg';  
import DKE from '../Images/Psi-Omega-Crest.jpg';  
import Resume from '../documents/BenRodgersResumeDec2024.pdf'; 


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
  border-bottom: 2px solid #e0e0e0; /* Add top border */
`;

const ExperienceSection2 = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  width: 100%;
  max-width: 100%;
  padding-bottom: 20px;
  
  
  `;

const LogoContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 30px;
`;

const TextContainer = styled.div`
  flex: 2;
  padding-left: 50px;
`;

const Experience = () => {
  return (
    <ExperienceContainer>
      <MainBlurb>
        <h1>Professional Experiences</h1>
        <p style={{maxWidth: '800px'}}>I have a very versatile professional background. My computer science major is well utilized, but my on the job 
           engineering and business experiences are also put to great use as shown below. If you are interested, please take a minute to view my
           resume, which is linked below.
        </p>
        <a href={Resume} target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.4em',textDecoration: 'none', color: 'green', fontWeight: 'bold' }}>
          View My Resume
        </a>
      </MainBlurb>
      <ExperienceSection>
        <LogoContainer>
          <img src={Siemens} alt="Logo" style={{ width: '800px', maxWidth: '110%', height: 'auto' }} />
        </LogoContainer>
        <TextContainer>
          <h2>Siemens</h2>
          <p><span style={{ fontWeight: 'bold' }}>Role(s):</span> Smart Infrastructure Intern, Assembly Technician</p>
          <p><span style={{ fontWeight: 'bold' }}>Duration:</span> May 2024 - July 2024 & May, July-August 2022, July-August 2023</p>
          <p><span style={{ fontWeight: 'bold' }}>Description:</span> I have a lot of experience in working for Siemens. I started as an Assembly technician in
                        in Harleysville, PA, then worked in Baltimore within their Smart Infrastructure department as an intern for the
                        Summer of 2024. </p>
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
                          service hours. As President, I oversee all chapter operations and work multiple hours each day to make sure 
                          everything runs smoothly.</p>
          <p>&nbsp;</p>
          <p><span style={{ fontWeight: 'bold' }}>Roles had, but not described:</span> Academic Chair, Sergeant at Arms, New Member Educator</p>
        </TextContainer>
      </ExperienceSection2>
    </ExperienceContainer>
  );
};

export default Experience;