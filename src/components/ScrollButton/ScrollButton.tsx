import { useState, useEffect, FC } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';
import s from './ScrollButton.module.css';
import { useTranslation } from 'react-i18next';

const ScrollButton: FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslation();

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className={`${s.scrollBtn} ${isVisible ? s.show : s.hide}`}>
      <div className={s.button} onClick={scrollToTop} title={t('scrollUp')}>
        <FaArrowCircleUp size={20} />
      </div>
    </div>
  );
};

export default ScrollButton;
