import { FC } from 'react';

import TelegramImg from '../../assets/telegram-img.jpg';
import s from './modal.module.css';
interface Props {
  // children: React.ReactNode;
  // onClose: (a: boolean) => boolean;
  onClose: (a: any) => void;
}

const Modal: FC<Props> = ({ onClose }) => {
  //   if (!isOpen) return null;

  return (
    <div onClick={onClose} className={s.wrapModal}>
      <img src={TelegramImg} alt="img" width={350} />
    </div>
    // <div className={s.wrapModal} onClick={onClose}>
    //   <img src={TelegramImg} alt="img" width={350} />
    // </div>
  );
};

export default Modal;
