import React from 'react';
import About from '../components/About';
import Contact from '../components/Contact';
import Main from '../components/Main';
import Projects from '../components/Projects';
import Skills from '../components/Skills';

const Home = () => {
  return (
    <div>
      <Main />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
};

export default Home;
