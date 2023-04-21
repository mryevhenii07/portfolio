import React from 'react';
import { useTranslation } from 'react-i18next';

import SearchEvenImg from '../assets/project/search-even.png';
import PizzaImg from '../assets/project/pizza.png';
import IceImg from '../assets/project/ice.png';
import GitonlineImg from '../assets/project/gitonline.png';
import CryptoImg from '../assets/project/crypto.png';
import WalletImg from '../assets/project/wallet.png';
import ProjectItem from './ProjectItem';

const Projects = () => {
  const { t } = useTranslation();
  return (
    <div id="projects" className="w-full ">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">{t('project')}</p>
        <h2 className="py-4">{t('projectBuild')}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title={t('projectsWalletApp')}
            backgroundImg={WalletImg}
            projectUrl="/wallet"
          />
          <ProjectItem
            title={t('projectsSearchEvent')}
            backgroundImg={SearchEvenImg}
            projectUrl="/event"
          />
          <ProjectItem
            title={t('projectsCryptoApp')}
            backgroundImg={CryptoImg}
            projectUrl="/crypto"
          />
          <ProjectItem
            title={t('projectsIceCream')}
            backgroundImg={IceImg}
            projectUrl="/icecream"
          />
          <ProjectItem
            title={t('projectsPizzaKing')}
            backgroundImg={PizzaImg}
            projectUrl="/pizza"
          />
          <ProjectItem
            title={t('projectsGidOnline')}
            backgroundImg={GitonlineImg}
            projectUrl="/gitonline"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
