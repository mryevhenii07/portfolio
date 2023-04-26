import { FC, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';

import './App.css';
import Navbar from './components/Navbar';
// import s from './variables/app.module.css';
import Home from './pages/home';
import Wallet from './pages/wallet';
import Pizza from './pages/pizza';
import IceCream from './pages/iceCream';
import GitOnline from './pages/gitonline';
import EventParty from './pages/event';
import Crypto from './pages/crypto';
import Popup from './components/popup/Popup';
import ScrollButton from './components/ScrollButton/ScrollButton';

import { lightTheme, darkTheme } from './theme/Theme';

const App: FC = () => {
  const [popup, setPopup] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const theme = isDarkMode ? darkTheme : lightTheme;

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const handlePopup = () => {
      setTimeout(() => {
        setPopup(true);
      }, 1000);
    };
    handlePopup();
  }, []);

  const popupClose = () => {
    setPopup(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <StyledTheme className="App">
        <Navbar handleToggle={handleToggle} />
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
        <ScrollButton />
      </StyledTheme>
    </ThemeProvider>
  );
};

export default App;

const StyledTheme = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
`;
