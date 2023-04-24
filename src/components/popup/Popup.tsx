import { FC } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import s from './popup.module.css';
import popupImg from '../../assets/popup-1.jpg';
import { useTranslation } from 'react-i18next';

interface Props {
  popupClose: (pop: any) => void;
}

const Popup: FC<Props> = ({ popupClose }) => {
  const { t } = useTranslation();

  return (
    <div className={s.wrapBody}>
      <div className={s.wrap}>
        <p className={s.title}>{t('popup')}</p>
        <div>
          <div className={s.close} onClick={popupClose}>
            <AiOutlineClose />
          </div>
          <a className={s.donat} target="_blank" rel="noreferrer" href="https://savelife.in.ua/">
            {t('popupLink')}
          </a>
        </div>
        <div className={s.wrapImg}>
          <img src={popupImg} alt="popup" />
        </div>
      </div>
    </div>
  );
};

export default Popup;
