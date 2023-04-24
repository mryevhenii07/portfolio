import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import s from '../variables/about.module.css';
import AboutImg from '../assets/iam.jpg';
import InstagrammImg from '../assets/Instagram.png';
import FacebookImg from '../assets/Facebook.png';
import TwiterImg from '../assets/twit.png';
import styled from 'styled-components';

const About: FC = () => {
  const { t } = useTranslation();
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">{t('about')}</p>
          <TextColorH2 className="py-4">{t('aboutWho')}</TextColorH2>
          <TextColorP className="py-2 text-gray-600">{t('aboutIAm')}</TextColorP>
          <TextColorP className="py-2 text-gray-600">{t('aboutFirstDescription')}</TextColorP>
          <TextColorP className="py-2 text-gray-600">{t('aboutSecondDescription')}</TextColorP>
        </div>

        <div className={s.container}>
          <div className={s.box}>
            <div className={s.imgBox}>
              <img src={AboutImg} alt="img" />
            </div>
            <div className={s.content}>
              <a href="https://www.instagram.com/mr_yevhenii_007/">
                <img src={FacebookImg} alt="facebook" width={25} height={25} />
              </a>
              <a href="https://www.instagram.com/mr_yevhenii_007/">
                <img src={InstagrammImg} alt="Instagramm" width={25} height={25} />
              </a>

              <a href="https://www.instagram.com/mr_yevhenii_007/">
                <img src={TwiterImg} alt="twiter" width={25} height={25} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

const TextColorP = styled.p`
  color: ${(props) => props.theme.textColor};
`;
const TextColorH2 = styled.h2`
  color: ${(props) => props.theme.textColor};
`;
