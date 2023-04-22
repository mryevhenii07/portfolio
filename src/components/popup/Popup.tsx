import { FC } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import s from './popup.module.css';
import popupImg from '../../assets/popup-1.jpg';

interface Props {
  popupClose: (pop: any) => void;
}

const Popup: FC<Props> = ({ popupClose }) => {
  return (
    <div className={s.wrapBody}>
      <div className={s.wrap}>
        <p className={s.title}>Ми всі об'єднуємось заради Перемоги!</p>
        <div>
          <div className={s.close} onClick={popupClose}>
            <AiOutlineClose />
          </div>
          <a className={s.donat} target="_blank" rel="noreferrer" href="https://savelife.in.ua/">
            Задонатити в БФ "Повернись Живим"
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
