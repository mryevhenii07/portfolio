import { FC, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar';
import s from './variables/app.module.css';
import Home from './pages/home';
import Wallet from './pages/wallet';
import Pizza from './pages/pizza';
import IceCream from './pages/iceCream';
import GitOnline from './pages/gitonline';
import EventParty from './pages/event';
import Crypto from './pages/crypto';
import Popup from './components/popup/Popup';

const App: FC = () => {
  const [popup, setPopup] = useState(false);

  useEffect(() => {
    const handlePopup = () => {
      setTimeout(() => {
        setPopup(true);
      }, 10000);
    };
    handlePopup();
  }, []);

  const popupClose = () => {
    setPopup(false);
  };

  return (
    <div className="App">
      <Navbar />
      {popup && <Popup popupClose={popupClose} />}
      <Routes>
        <Route path="/portfolio" element={<Home />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/pizza" element={<Pizza />} />
        <Route path="/icecream" element={<IceCream />} />
        <Route path="/gitonline" element={<GitOnline />} />
        <Route path="/event" element={<EventParty />} />
        <Route path="/crypto" element={<Crypto />} />
      </Routes>
    </div>
  );
};

export default App;
