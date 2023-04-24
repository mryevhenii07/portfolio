import { FC } from 'react';
import s from './SwitchTheme.module.css';
import SunImg from '../../assets/sun.png';
import MoonImg from '../../assets/moon.png';
interface Props {
  handleToggle: (a: any) => void;
}

const SwitchTheme: FC<Props> = ({ handleToggle }) => {
  return (
    <>
      <input
        className={s.input}
        type="checkbox"
        name=""
        id="darkmode-toggle"
        onChange={handleToggle}
      />
      <label className={s.label} htmlFor="darkmode-toggle">
        <img className={s.sun} src={SunImg} alt="img" />
        <img className={s.moon} src={MoonImg} alt="img" />
      </label>
    </>
  );
};

export default SwitchTheme;
