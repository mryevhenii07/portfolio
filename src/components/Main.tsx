import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import { useTranslation } from 'react-i18next';

import { withStyles } from '@material-ui/core/styles';
import { AiOutlineMail } from 'react-icons/ai';
import { FaLinkedinIn, FaGithub, FaTelegram } from 'react-icons/fa';

import Modal from './modal/modal';
import s from '../variables/main.module.css';

import styled from 'styled-components';
const TextOnlyTooltip = withStyles({
  tooltip: {
    color: 'white',
    backgroundColor: 'blank',
    height: '40px',
    fontSize: '20px',
    display: 'flex',
    alignItems: 'center',
  },
})(Tooltip);

const StyledText = styled.div`
  color: ${(props) => props.theme.colors.danger};
`;
const Main = () => {
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(false);
  const onClose = () => setOpen(true);

  const { t } = useTranslation();

  return (
    <div id="home" className="w-full h-screen text-center relative">
      {!open ? (
        <Modal onClose={onClose} />
      ) : (
        <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
          <div>
            <p className="uppercase text-sm tracking-widest text-gray-600">{t('build')}</p>

            <h1 className="py-4 text-gray-700">
              {t('mainHi')} <span className="text-[#5651e5]">{t('mainName')}</span>
            </h1>
            <h2 className="py-2 text-gray-700">A Front-End Developer</h2>

            <p className="py-4 text-gray-600 sm:max-w-[70%] m-auto">{t('mainText')}</p>
            <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
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
              <TextOnlyTooltip title="mrit.works07@gmail.com" arrow>
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                  <AiOutlineMail size={24} />
                </div>
              </TextOnlyTooltip>

              <div
                onClick={handleOpen}
                className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaTelegram size={28} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Main;
