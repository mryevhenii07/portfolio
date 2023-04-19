import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import s from '../variables/about.module.css';
import AboutImg from '../assets/iam.jpg';
import InstagrammImg from '../assets/Instagram.png';
import FacebookImg from '../assets/Facebook.png';
import TwiterImg from '../assets/twit.png';

const About: FC = () => {
  const { t } = useTranslation();
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">{t('about')}</p>
          <h2 className="py-4">{t('aboutWho')}</h2>
          <p className="py-2 text-gray-600">{t('aboutIAm')}</p>
          <p className="py-2 text-gray-600">{t('aboutFirstDescription')}</p>
          <p className="py-2 text-gray-600">{t('aboutSecondDescription')}</p>
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
        {/* <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <img src={AboutImg} alt="img" />
        </div> */}
      </div>
    </div>
  );
};

export default About;
