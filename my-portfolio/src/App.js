import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components'; 
import { createGlobalStyle } from 'styled-components';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
// import Main from './components/Main';
import Main2 from './components/Main2';
// import About from './components/About';
import About2 from './components/About2';
// import Projects from './components/Projects';
import Projects2 from './components/Projects2';
import Contact from './components/Contact';
import Experience from './components/Experience';
import TicTacToe from './components/Tic-Tac-Toe';
import DKEWebsite from './components/DKE-Website';
import WTGW from './components/WTGW'; 
import BJRWeb from './components/BJRWeb';
import FitCheck from './components/FitCheck'; 

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const GlobalStyle = createGlobalStyle`
  body {
    overflow-x: hidden;
    font-family: 'Georgia', Arial, Helvetica, sans-serif; 
  }
`;



function App() {
    return (
        <>
        <GlobalStyle />
            <Router>
                <AppContainer>
                    <Header />
                    <Content>
                        <Routes>
                            <Route path="/" element={<Main2 />} />
                            <Route path="/about" element={<About2 />} />
                            <Route path="/projects" element={<Projects2 />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/experience" element={<Experience />} />
                            <Route path="/Tic-Tac-Toe" element={<TicTacToe />} />
                            <Route path="/DKE-Website" element={<DKEWebsite />} />
                            <Route path="/WTGW" element={<WTGW />} />
                            <Route path="/BJR" element={<BJRWeb />} />
                            <Route path="/FitCheck" element={<FitCheck />} />

                        </Routes>
                    </Content>
                    <Footer />
                </AppContainer>
            </Router>
        <GlobalStyle />
        </>
    );
}

export default App;