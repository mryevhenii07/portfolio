import { useState, FC } from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import { AiOutlineMail } from 'react-icons/ai';
import { FaLinkedinIn, FaGithub, FaTelegram } from 'react-icons/fa';

import Modal from './modal/modalTelegram/modal';

import ModalEmail from './modal/modalEmail/modalEmail';

const Main: FC = () => {
  const [open, setOpen] = useState(true);
  const handleOpen = () => setOpen(false);
  const onClose = () => setOpen(true);

  const { t } = useTranslation();

  return (
    <>
      <div id="home" className="w-full h-screen text-center relative">
        {!open ? (
          <Modal onClose={onClose} />
        ) : (
          <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
            <div>
              <TextColor className="uppercase text-sm tracking-widest text-gray-600">
                {t('build')}
              </TextColor>

              <TextColorMainHi className="py-4 text-gray-700">
                {t('mainHi')} <span className="text-[#5651e5]">{t('mainName')}</span>
              </TextColorMainHi>
              <TextColorFronEnd className="py-2 text-gray-700">
                A Front-End Developer
              </TextColorFronEnd>

              <TextColor className="py-4 text-gray-600 sm:max-w-[70%] m-auto">
                {t('mainText')}
              </TextColor>
              <TextColorImg className="flex items-center justify-between max-w-[330px] m-auto py-4">
                <a
                  href="https://www.linkedin.com/in/yevhenii-peredrii-a069a7223/"
                  target="_blank"
                  rel="noreferrer">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <FaLinkedinIn size={24} />
                  </div>
                </a>
                <a href="https://github.com/mryevhenii07" target="_blank" rel="noreferrer">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <FaGithub size={24} />
                  </div>
                </a>
                <ModalEmail />

                <div
                  onClick={handleOpen}
                  className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                  <FaTelegram size={28} />
                </div>
              </TextColorImg>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Main;
const TextColor = styled.p`
  color: ${(props) => props.theme.textColor};
`;
const TextColorMainHi = styled.h1`
  color: ${(props) => props.theme.textColor};
`;
const TextColorFronEnd = styled.h2`
  color: ${(props) => props.theme.textColor};
`;
const TextColorImg = styled.div`
  color: ${(props) => props.theme.textColor};
`;
