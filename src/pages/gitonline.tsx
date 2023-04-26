import { FC } from 'react';

import { RiRadioButtonFill } from 'react-icons/ri';

import PropertyImg from '../assets/project/gitonlinebg.png';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const GitOnline: FC = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full ">
      <div className="w-screen h-[30Vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/70 z-10" />
        <img className="absolute lg:h-[40vh]" src={PropertyImg} alt="/" />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2"> {t('projectsGidOnline')}</h2>
          <h3>My Own Project</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p> {t('pagesProject')}</p>
          <TextColorH2> {t('pagesOverview')}</TextColorH2>
          <TextColorP>{t('pagesDescriptionGidOnline')}</TextColorP>
          <TextColorP>
            API took from{' '}
            <a className="front-bold underline" href="https://www.themoviedb.org/">
              Themoviedb
            </a>
          </TextColorP>
          <a href="https://mryevhenii07.github.io/gitonline/" target="_blank" rel="noreferrer">
            <button className="px-8 py-2 mt-4 mr-8 shadow-lg shadow-gray-400"> {t('pagesDemo')}</button>
          </a>
          <a href="https://github.com/mryevhenii07/gitonline">
            <button className="px-8 py-2 mt-4 shadow-lg shadow-gray-400"> {t('pagesCode')}</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <TextColorP className="text-center font-bold pb-2">
              {' '}
              {t('pagesTechnologies')}
            </TextColorP>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <TextColorP className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> HTML
              </TextColorP>
              <TextColorP className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Java Script
              </TextColorP>
              <TextColorP className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React
              </TextColorP>
              <TextColorP className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React-Router-Dom
              </TextColorP>
            </div>
          </div>
        </div>
        <Link to="/portfolio">
          <TextColorP className="underline cursor-pointer">{t('pageBack')}</TextColorP>
        </Link>
      </div>
    </div>
  );
};

export default GitOnline;
const TextColorP = styled.p`
  color: ${(props) => props.theme.textColor};
`;
const TextColorH2 = styled.h2`
  color: ${(props) => props.theme.textColor};
`;
