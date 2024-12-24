import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components'; // Import styled from styled-components
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Experience from './components/Experience';
import TicTacToe from './components/Tic-Tac-Toe';

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

function App() {
    return (
        <Router>
            <AppContainer>
                <Header />
                <Content>
                    <Routes>
                        <Route path="/" element={<Main />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/experience" element={<Experience />} />
                        <Route path="/Tic-Tac-Toe" element={<TicTacToe />} />
                    </Routes>
                </Content>
                <Footer />
            </AppContainer>
        </Router>
    );
}

export default App;