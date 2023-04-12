import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';

import Navbar from './components/Navbar';
import Home from './pages/home';
import Wallet from './pages/wallet';
import Pizza from './pages/pizza';
import IceCream from './pages/iceCream';
import GitOnline from './pages/gitonline';
import EventParty from './pages/event';
import Crypto from './pages/crypto';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Main />
      <About />
      <Projects />
      <Skills />
      <Contact /> */}
      <Routes>
        <Route path="/portfolio" element={<Home />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/pizza" element={<Pizza />} />
        <Route path="/icecream" element={<IceCream />} />
        <Route path="/gitonline" element={<GitOnline />} />
        <Route path="/event" element={<EventParty />} />
        <Route path="/crypto" element={<Crypto />} />
        {/* <Route path="/books" element={<BookList />} /> */}
      </Routes>
    </div>
  );
}

export default App;
