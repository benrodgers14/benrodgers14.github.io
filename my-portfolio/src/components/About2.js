import React, { useState } from 'react';
import styled from 'styled-components';
import Wilderness from '../Images/Wilderness.JPG';
import Colorado from '../Images/Colorado.JPG';
import Canyon from '../Images/Canyon.JPG';
import Mississippi from '../Images/Mississippi.JPG';
import Badland from '../Images/Badland.JPG';


const PageBackground = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: #E6DEB9; 
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const SliderContainer = styled.div`
  width: 100vw;
  max-width: 1000px;
  margin: 60px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
  
`;

const CardArea = styled.div`
  width: 800px;
  max-width: 98vw;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden; 
`;
const CardTrack = styled.div`
  display: flex;
  transition: transform 0.6s cubic-bezier(.23,1.01,.32,1);
  transform: ${({ index }) => `translateX(-${index * 100}%)`};
  width: 100%;
`;


const InfoCard = styled.div`
  min-width: 100%;
  max-width: 600px; 
  box-sizing: border-box;
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 4px 24px rgba(31,115,44,0.10);
  padding: 24px 32px 24px 32px;
  text-align: left;
  min-height: 320px;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  h2 {
    color: #3b2e1e;
    margin-bottom: 0.7em;
    margin-top: 0em;
    font-size: 2em;
    font-weight: 700;
  }
  p {
    font-size: 1.15em;
    color: #333;
    margin: 0 0 16px 0;
    line-height: 1.5;
  }
  img {
    align-self: center;
    margin-top: 16px;
    max-width: 100%;
    width: 100%;
    border-radius: 12px;
    flex-grow: 1;
    box-shadow: 0 2px 12px rgba(31,115,44,0.10);
    object-fit: cover;
    min-height: 0;  
    
  }
  @media (min-width: 2000px) {
    padding: 12px 16px 8px 32px; 
  }
  @media (max-width: 600px) {
    max-width: 98vw;
    height: auto; 
    padding: 20px 8px 12px 8px;
    min-height: 0;
    h2 {
      font-size: 1.2em;
    }
    p {
      font-size: 0.95em;
    }
    img {
      max-height: 180px;
    }
  }
`;

// const ArrowRow = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   gap: 32px;
//   margin-top: 24px;
//   margin-bottom: 0;
// `;

// const ArrowButton = styled.button`
//   background: #3b2e1e;
//   color: #fff;
//   border: none;
//   border-radius: 50%;
//   width: 44px;
//   height: 44px;
//   font-size: 2em;
//   cursor: pointer;
//   opacity: 0.85;
//   transition: background 0.2s;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   line-height: 1;
//   &:hover {
//     background: #4b6b3c;
//   }
//   &:disabled {
//     opacity: 0.3;
//     cursor: default;
//   }
// `;

const ArrowButton = styled.button`
  background: #3b2e1e;
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 56px;
  height: 56px;
  font-size: 3em;
  cursor: pointer;
  opacity: 0.85;
  transition: background 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  position: absolute;
  top: 50%;
  transform: translateY(0%);
  z-index: 2;

  &:hover {
    background: #4b6b3c;
  }
  &:disabled {
    opacity: 0.3;
    cursor: default;
  }

  @media (max-width: 1300px) {
    display: none;
  }

  @media (max-width: 600px) {
  
    position: static !important;
    width: 44px !important;
    height: 44px !important;
    font-size: 2em !important;
    margin: 0 8px;
  }
`;

const ArrowLeft = styled(ArrowButton)`
  left: 35px;
`;

const ArrowRight = styled(ArrowButton)`
  right: 35px;
`;

const ArrowRowMobile = styled.div`
  display: none;

  @media (max-width: 1300px) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 32px;
    position: static;
    margin-top: 32px;
    width: 100%;

  }
`;

const Subtext = styled.p`
  text-align: center;
  color: #3b2e1e;
  font-size: 1.1em;
  margin-bottom: 20px;
  margin-top: -16px;
`;

const PhotoCaption = styled.figcaption`
  text-align: center;
  color: #3b2e1e;
  font-size: 1em;
  margin-top: 12px;
  font-style: italic;
`;

const About2 = () => {
  const AboutData = [
    {
      question: "General Interests",
      answer: `I am a frequent adventurer and love to travel. I enjoy camping, hiking, and exploring new places. There is no better feeling
      than being somewhere you've never been before. I have been lucky enough to experience many of these trips with some of my closest friends.
      Aside from my adventures, I am a self-taught guitarist and enjoy playing music in my free time, particularly songs by Bob Dylan.`,
      img: Wilderness,
      caption: "Shoshone National Forrest, Summer 2025"
    },
    {
      question: "Education",
      answer: `I have a strong educational background. I graduated from Springside Chestnut Hill Academy in 2022, and now attend Rensselaer
       Polytechnic Institute as a Computer Science and Economics Dual Major with a concentration in Artificial Intelligence and Data. My
       intended graduation date is Spring 2026.`,
      img: Colorado,
      caption: "Colorado, Summer 2023"
    },

    {
      question: "Programming Languages",
      answer: `RPI has taught me many things. I have gained proficiency in several programming languages. My main languages are Python, C++, C, JavaScript, and Java. Though this is not anywhere near my bounds. I have
      a strong ability to adapt and learn new languages and technologies as needed. I have spent time working with Haskell, Erlang, and Dafny. I can be a Swiss army knife when it comes to programming languages.`,
      img: Canyon,
      caption: "Grand Canyon, Summer 2023"
    },
    {
      question: "Concepts",
      answer: `As my concentration suggests, I have a strong understanding of Artificial Intelligence, Machine Learning, and Data. From foundational concepts to advanced techniques, I am well-versed in the principles and applications of these fields.
      Website and Software Development are also areas of experience for me. Throughout my time at RPI, I have worked on various projects that have honed my skills in these areas.`,
      img: Mississippi,
      caption: "Mississippi River, Minnesota, Summer 2023"
    },
    {
      question: "Economic Interests",
      answer: `I am not only a computer science major, but I am also a dual major of economics. The intersection of technology and economics is vast and has many applications, but speaking strictly on the economic side, I have a strong interest in both labor and
      trade economics. I have taken many courses in this major, but those two subjects are the ones I think about most when analyzing everyday situations.`,
      img: Badland,
      caption: "Badlands National Park, Summer 2023"
    },
  ];

  const [index, setIndex] = useState(0);

  const prevCard = () => setIndex(i => Math.max(i - 1, 0));
  const nextCard = () => setIndex(i => Math.min(i + 1, AboutData.length - 1));


return (
  <PageBackground>
    <SliderContainer style={{ position: 'relative' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '32px', color: '#3b2e1e', marginTop: '0em' }}>Quick Information About Me</h1>
      <Subtext>
        Information about my computer science and economics strengths and interests along with my personal hobbies and experiences.
      </Subtext>

      <ArrowLeft onClick={prevCard} disabled={index === 0} aria-label="Previous card">
        &#8592;
      </ArrowLeft>
      <ArrowRight onClick={nextCard} disabled={index === AboutData.length - 1} aria-label="Next card">
        &#8594;
      </ArrowRight>
      <CardArea>
        <CardTrack index={index}>
          {AboutData.map((about, i) => (
            <InfoCard key={i}>
              <h2>{about.question}</h2>
              <p>{about.answer}</p>
              <img src={about.img} alt={about.question + " image"} />
              <PhotoCaption>{about.caption}</PhotoCaption>

            </InfoCard>
          ))}
        </CardTrack>
      </CardArea>
          <ArrowRowMobile>
            <ArrowButton
              as="button"
              style={{ position: 'static', display: 'flex' }}
              onClick={prevCard}
              disabled={index === 0}
              aria-label="Previous card"
            >
              &#8592;
            </ArrowButton>
            <ArrowButton
              as="button"
              style={{ position: 'static', display: 'flex' }}
              onClick={nextCard}
              disabled={index === AboutData.length - 1}
              aria-label="Next card"
            >
              &#8594;
          </ArrowButton>
        </ArrowRowMobile>
    </SliderContainer>
  </PageBackground>
);

};

export default About2;