// import Image from 'next/image';
// import Link from 'next/link';
// import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from 'react-icons/ai';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
// import en from '../locales/en';
// import ua from '../locales/ua';

import Logo from '../assets/navLogo.png';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  // const router = useRouter();
  // const { locale } = router;
  // const t = locale === 'en' ? en : ua;

  // const changeLanguage = (e) => {
  //   const locale = e.target.value;
  //   console.log(locale);
  //   router.push('/', '/', { locale: locale });
  // };
  const handleNav = () => {
    setNav(!nav);
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

  return (
    <div className={shadow ? 'fixed w-full h-20 shadow-xl z-[100]' : 'fixed w-full h-20 z-[100]'}>
      {/* <select onChange={changeLanguage} defaultValue={locale}>
        <option value="en">EN</option>
        <option value="ua">UA</option>
      </select> */}
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        {/* <Link to="/"> */}
        <img src={Logo} alt="/" width="125" height="50" />
        {/* </Link> */}
        <div>
          <ul className="hidden md:flex">
            {/* <Link to="/"> */}
            <li className="ml-10 text-sm uppercase hover:text-[#757373] cursor-pointer">
              {/* {t.home} */}
              Home
            </li>
            {/* </Link> */}
            {/* <Link to="/#about"> */}
            <li className="ml-10 text-sm uppercase hover:text-[#757373] cursor-pointer">
              {/* {t.about} */}
              About
            </li>
            {/* </Link> */}
            {/* <Link to="/#skills"> */}
            <li className="ml-10 text-sm uppercase hover:text-[#757373] cursor-pointer">
              {/* {t.skills} */}
              Skills
            </li>
            {/* </Link> */}
            {/* <Link to="/#projects"> */}
            <li className="ml-10 text-sm uppercase hover:text-[#757373] cursor-pointer">
              {/* {t.projects} */}
              Projects
            </li>
            {/* </Link> */}
            {/* <Link to="/#contact"> */}
            <li className="ml-10 text-sm uppercase hover:text-[#757373] cursor-pointer">
              {/* {t.contact} */}
              Contact
            </li>
            {/* </Link> */}
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
        <div
          className={
            nav
              ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0  p-10 ease-in duration-500'
          }>
          <div>
            <div className="flex w-full items-center justify-between">
              {/* <Link to="/"> */}
              <img src={Logo} width="87" height="35" alt="/" />
              {/* </Link> */}

              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                {/* {t.letsBuild} */}
                LETS BUILD SOMETHING TOGETHER
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase ">
              {/* <Link to="/"> */}
              <li
                onClick={() => {
                  setNav(false);
                }}
                className="py-4 text-sm cursor-pointer hover:scale-105 ease-in duration-300">
                {/* {t.home} */}
                Home
              </li>
              {/* </Link> */}
              {/* <Link to="/#about"> */}
              <li
                onClick={() => {
                  setNav(false);
                }}
                className="py-4 text-sm cursor-pointer hover:scale-105 ease-in duration-300">
                {/* {t.about} */}
                About
              </li>
              {/* </Link> */}
              {/* <Link to="/#skills"> */}
              <li
                onClick={() => {
                  setNav(false);
                }}
                className="py-4 text-sm cursor-pointer hover:scale-105 ease-in duration-300">
                {/* {t.skills} */}
                Skills
              </li>
              {/* </Link> */}
              {/* <Link to="/#projects"> */}
              <li
                onClick={() => {
                  setNav(false);
                }}
                className="py-4 text-sm cursor-pointer hover:scale-105 ease-in duration-300">
                {/* {t.projects} */}
                Project
              </li>
              {/* </Link> */}
              {/* <Link to="/#contact"> */}
              <li
                onClick={() => {
                  setNav(false);
                }}
                className="py-4 text-sm cursor-pointer  hover:scale-105 ease-in duration-300">
                {/* {t.contact} */}
                Contact
              </li>
              {/* </Link> */}
            </ul>
            <div className="pt-4">
              <p className="uppercase tracking-widest text-[#5651e5]">
                {/* {t.letsConnect} */}
                Lets Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <a
                  href="https://www.linkedin.com/in/yevhenii-peredrii-a069a7223/"
                  target="_blank"
                  rel="noreferrer">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>{' '}
                </a>
                <a href="https://github.com/mryevhenii07" target="_blank" rel="noreferrer">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaGithub />
                  </div>
                </a>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <AiOutlineMail />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <BsFillPersonLinesFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
