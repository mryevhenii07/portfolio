import { FC } from 'react';

import TelegramImg from '../../../assets/telegram-img.jpg';
import s from './modal.module.css';
interface Props {
  onClose: (a: any) => void;
}

const Modal: FC<Props> = ({ onClose }) => {
  return (
    <div onClick={onClose} className={s.wrapModal}>
      <img src={TelegramImg} alt="img" width={350} />
    </div>
  );
};

export default Modal;
