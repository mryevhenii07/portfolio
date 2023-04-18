import React from 'react';

import SearchEvenImg from '../assets/project/search-even.png';
import PizzaImg from '../assets/project/pizza.png';
import IceImg from '../assets/project/ice.png';
import GitonlineImg from '../assets/project/gitonline.png';
import CryptoImg from '../assets/project/crypto.png';
import WalletImg from '../assets/project/wallet.png';

import ProjectItem from './ProjectItem';
import { useTranslation } from 'react-i18next';

const Projects = () => {
  const { t } = useTranslation();
  return (
    <div id="projects" className="w-full ">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5">{t('project')}</p>
        <h2 className="py-4">{t('projectBuild')}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem title="Wallet App" backgroundImg={WalletImg} projectUrl="/wallet" />
          <ProjectItem title="Git Online" backgroundImg={GitonlineImg} projectUrl="/gitonline" />
          <ProjectItem title="Search Event" backgroundImg={SearchEvenImg} projectUrl="/event" />
          <ProjectItem title="Crypto App" backgroundImg={CryptoImg} projectUrl="/crypto" />
          <ProjectItem title="Pizza King" backgroundImg={PizzaImg} projectUrl="/pizza" />
          <ProjectItem title="Ice Cream" backgroundImg={IceImg} projectUrl="/icecream" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
