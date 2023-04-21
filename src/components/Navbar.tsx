import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from 'react-icons/ai';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import UaImg from '../assets/ua.jpg';
import UkImg from '../assets/uk.jpg';
import s from '../variables/navbar.module.css';

const NavBar = () => {
  const [shadow, setShadow] = useState(false);
  const { i18n } = useTranslation();
  const activeButton = i18n.language;

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
    <div className={shadow ? 'fixed w-full h-30 shadow-xl z-[100]' : 'fixed w-full h-30 z-[100]'}>
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
        <div className={s.wrapperBtn}>
          <img
            src={UkImg}
            className={activeButton === 'en' ? `${s.activeButton}` : `${s.img}`}
            alt="img"
            onClick={() => changeLanguage('en')}
          />
          <img
            src={UaImg}
            alt="img"
            onClick={() => changeLanguage('ua')}
            className={activeButton === 'ua' ? `${s.activeButton}` : `${s.img}`}
          />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
// import React, { useState, useEffect } from 'react';
// import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from 'react-icons/ai';
// import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
// import { BsFillPersonLinesFill } from 'react-icons/bs';

// import Logo from '../assets/navLogo.png';
// import { Link } from 'react-router-dom';

// const NavBar = () => {
//   const [nav, setNav] = useState(false);
//   const [shadow, setShadow] = useState(false);

//   const handleNav = () => {
//     setNav(!nav);
//   };

//   useEffect(() => {
//     const handleShadow = () => {
//       if (window.scrollY >= 90) {
//         setShadow(true);
//       } else {
//         setShadow(false);
//       }
//     };
//     window.addEventListener('scroll', handleShadow);
//   }, []);

//   return (
//     <div className={shadow ? 'fixed w-full h-20 shadow-xl z-[100]' : 'fixed w-full h-20 z-[100]'}>
//       <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
//         <Link to="/portfolio">
//           <img src={Logo} alt="/" width="125" height="50" />
//         </Link>
//         <div>
//           <ul className="hidden md:flex">
//             <Link to="/portfolio">
//               <li className="ml-10 text-sm uppercase hover:text-[#757373] cursor-pointer">Home</li>
//             </Link>
//             <a href="/#about">
//               <li className="ml-10 text-sm uppercase hover:text-[#757373] cursor-pointer">About</li>
//             </a>
//             <a href="/#skills">
//               <li className="ml-10 text-sm uppercase hover:text-[#757373] cursor-pointer">
//                 {/* {t.skills} */}
//                 Skills
//               </li>
//             </a>
//             <a href="/#projects">
//               <li className="ml-10 text-sm uppercase hover:text-[#757373] cursor-pointer">
//                 Projects
//               </li>
//             </a>
//             <a href="/#contact">
//               <li className="ml-10 text-sm uppercase hover:text-[#757373] cursor-pointer">
//                 Contact
//               </li>
//             </a>
//           </ul>
//           <div onClick={handleNav} className="md:hidden">
//             <AiOutlineMenu size={25} />
//           </div>
//         </div>
//       </div>
//       <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
//         <div
//           className={
//             nav
//               ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
//               : 'fixed left-[-100%] top-0  p-10 ease-in duration-500'
//           }>
//           <div>
//             <div className="flex w-full items-center justify-between">
//               <img src={Logo} width="87" height="35" alt="/" />

//               <div
//                 onClick={handleNav}
//                 className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
//                 <AiOutlineClose />
//               </div>
//             </div>
//             <div className="border-b border-gray-300 my-4">
//               <p className="w-[85%] md:w-[90%] py-4">
//                 {/* {t.letsBuild} */}
//                 LETS BUILD SOMETHING TOGETHER
//               </p>
//             </div>
//           </div>
//           <div className="py-4 flex flex-col">
//             <ul className="uppercase ">
//               {/* <Link to="/"> */}
//               <li
//                 onClick={() => {
//                   setNav(false);
//                 }}
//                 className="py-4 text-sm cursor-pointer hover:scale-105 ease-in duration-300">
//                 {/* {t.home} */}
//                 Home
//               </li>
//               {/* </Link> */}
//               {/* <Link to="/#about"> */}
//               <li
//                 onClick={() => {
//                   setNav(false);
//                 }}
//                 className="py-4 text-sm cursor-pointer hover:scale-105 ease-in duration-300">
//                 {/* {t.about} */}
//                 About
//               </li>
//               {/* </Link> */}
//               {/* <Link to="/#skills"> */}
//               <li
//                 onClick={() => {
//                   setNav(false);
//                 }}
//                 className="py-4 text-sm cursor-pointer hover:scale-105 ease-in duration-300">
//                 {/* {t.skills} */}
//                 Skills
//               </li>
//               {/* </Link> */}
//               {/* <Link to="/#projects"> */}
//               <li
//                 onClick={() => {
//                   setNav(false);
//                 }}
//                 className="py-4 text-sm cursor-pointer hover:scale-105 ease-in duration-300">
//                 {/* {t.projects} */}
//                 Project
//               </li>
//               {/* </Link> */}
//               {/* <Link to="/#contact"> */}
//               <li
//                 onClick={() => {
//                   setNav(false);
//                 }}
//                 className="py-4 text-sm cursor-pointer  hover:scale-105 ease-in duration-300">
//                 {/* {t.contact} */}
//                 Contact
//               </li>
//               {/* </Link> */}
//             </ul>
//             <div className="pt-4">
//               <p className="uppercase tracking-widest text-[#5651e5]">
//                 {/* {t.letsConnect} */}
//                 Lets Connect
//               </p>
//               <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
//                 <a
//                   href="https://www.linkedin.com/in/yevhenii-peredrii-a069a7223/"
//                   target="_blank"
//                   rel="noreferrer">
//                   <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
//                     <FaLinkedinIn />
//                   </div>{' '}
//                 </a>
//                 <a href="https://github.com/mryevhenii07" target="_blank" rel="noreferrer">
//                   <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
//                     <FaGithub />
//                   </div>
//                 </a>
//                 <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
//                   <AiOutlineMail />
//                 </div>
//                 <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
//                   <BsFillPersonLinesFill />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NavBar;
