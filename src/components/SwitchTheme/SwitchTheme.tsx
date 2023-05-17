import { FC, useState } from 'react';
import s from './SwitchTheme.module.css';
import SunImg from '../../assets/sun.png';
import MoonImg from '../../assets/moon.png';
interface Props {
  handleToggle: (a: any) => void;
}

const SwitchTheme: FC<Props> = ({ handleToggle }) => {
  const [isDark, setIsDark] = useState(false);
  const isToggleTheme = () => {
    setIsDark(!isDark);
  };
  return (
    <div onClick={isToggleTheme}>
      <div onClick={handleToggle}>
        {isDark ? (
          <img src={SunImg} alt="img" width={20} />
        ) : (
          <img src={MoonImg} alt="img" width={20} />
        )}
      </div>
    </div>
  );
};

export default SwitchTheme;
// import { FC, useState } from 'react';
// import s from './SwitchTheme.module.css';
// import SunImg from '../../assets/sun.png';
// import MoonImg from '../../assets/moon.png';
// interface Props {
//   handleToggle: (a: any) => void;
// }

// const SwitchTheme: FC<Props> = ({ handleToggle }) => {
//   const [isDark, setIsDark] = useState(false);
//   const isToggleTheme = () => {
//     setIsDark(!isDark);
//   };
//   return (
//     <>
//     <div>
//        {isDark ? <img } src={SunImg} alt="img" /> :      <img  src={MoonImg} alt="img" />}
//     </div>
// {/*
//       <input
//         className={s.input}
//         type="checkbox"
//         name=""
//         id="darkmode-toggle"
//         onChange={handleToggle}
//       />
//       <label className={s.label} htmlFor="darkmode-toggle">
//         <img className={s.sun} src={SunImg} alt="img" />
//         <img className={s.moon} src={MoonImg} alt="img" />
//       </label> */}
//     </>
//   );
// };

// export default SwitchTheme;
