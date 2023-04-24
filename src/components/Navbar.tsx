import { useState, useEffect, FC } from 'react';
import { useTranslation } from 'react-i18next';

import UaImg from '../assets/ua.jpg';
import UkImg from '../assets/uk.jpg';
import s from '../variables/navbar.module.css';
import SwitchTheme from './SwitchTheme/SwitchTheme';

import styled from 'styled-components';

interface Props {
  handleToggle: (aa: any) => void;
}

const NavBar: FC<Props> = ({ handleToggle }) => {
  const [shadow, setShadow] = useState(false);
  const { i18n } = useTranslation();

  const [choose, setChoose] = useState(false);

  const handleChoose = () => {
    setChoose(!choose);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <StyledTheme
      className={shadow ? 'fixed w-full h-30 shadow-xl z-[100]' : 'fixed w-full h-30 z-[100]'}>
      <div className={s.wrap}>
        <div className={s.container}>
          <section className={s.animation}>
            <div className={s.first}>
              <div> TypeScript</div>
            </div>{' '}
            <div className={s.first}>
              <div>Next.js</div>
            </div>
            <div className={s.second}>
              <div>JavaScript</div>
            </div>
          </section>
        </div>
        <div className={s.wrapRightBlock}>
          <SwitchTheme handleToggle={handleToggle} />
          <div className={s.wrapperBtn} onClick={handleChoose}>
            {choose ? (
              <img src={UkImg} className={s.img} alt="img" onClick={() => changeLanguage('en')} />
            ) : (
              <img src={UaImg} className={s.img} alt="img" onClick={() => changeLanguage('ua')} />
            )}
          </div>
        </div>
      </div>
    </StyledTheme>
  );
};

export default NavBar;

const StyledTheme = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
`;
