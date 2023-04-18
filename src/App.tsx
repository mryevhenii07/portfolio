import { FC, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

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
// import UaImg from './assets/ua.jpg';
// import UkImg from './assets/uk.jpg';

const App: FC = () => {
  // const { i18n } = useTranslation();
  // const changeLanguage = (lng: string) => {
  //   i18n.changeLanguage(lng);
  // };

  return (
    <div className="App">
      {/* <div className={s.wrapperBtn}>
        <img src={UkImg} className={s.img} alt="img" onClick={() => changeLanguage('en')} />
        <img src={UaImg} alt="img" onClick={() => changeLanguage('uk')} className={s.img} />
      </div> */}

      <Navbar />
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
