import { useState, FC } from 'react';
import { FaGithub, FaLinkedinIn, FaTelegram } from 'react-icons/fa';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

import Img from '../assets/contact.jpg';
import Modal from './modal/modalTelegram/modal';
import ModalEmail from './modal/modalEmail/modalEmail';

const Contact: FC = () => {
  const [open, setOpen] = useState(true);
  const handleOpen = () => setOpen(false);
  const onClose = () => setOpen(true);

  const { t } = useTranslation();

  return (
    <div id="#contact" className="w-full  ">
      {/* <div id="#contact" className="w-full lg:h-screen "> */}
      {!open ? (
        <Modal onClose={onClose} />
      ) : (
        <div className="max-w-[1240px] m-auto px-2 py-16 w-full ">
          <p className="text-xl tracking-widest uppercase text-[#5651e5]">{t('contact')}</p>
          <TextColorH2 className="py-4">{t('contactGet')}</TextColorH2>
          <div className="grid lg:grid-cols-5 gap-8">
            {/* left */}
            <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
              <div className="lg:p-4 h-full ">
                <div>
                  <img
                    className="rounded-xl hover:scale-105 ease-in duration-300"
                    src={Img}
                    alt="/"
                  />
                </div>
                <div>
                  <TextColorH2 className="py-2">{t('contactFullName')}</TextColorH2>
                  <TextColorP>Front-End Developer</TextColorP>
                  <TextColorP className="py-4">{t('contactFullNameDescription')}</TextColorP>
                </div>
                <div>
                  <p className="uppercase pt-8 text-[#5651e5]">{t('contactWithMe')}</p>
                  <TextColorDiv className="flex items-center justify-between py-4">
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
                  </TextColorDiv>
                </div>
              </div>
            </div>

            {/* right */}
            <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
              <div className="p-4">
                <form
                  action="https://formsubmit.co/2fd283c03dbbc1e0885bdf912e5787e5"
                  method="POST"
                  encType="multipart/form-data">
                  <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                    <div className="flex flex-col">
                      <TextColorLabel className="uppercase text-sm py-2">
                        {t('contactName')}
                      </TextColorLabel>
                      <input
                        className="border-2 rounded-lg p-3 flex border-gray-300"
                        type="text"
                        name="name"
                      />
                    </div>
                    <div className="flex flex-col">
                      <TextColorLabel className="uppercase text-sm py-2">
                        {t('contactNumber')}
                      </TextColorLabel>
                      <input
                        className="border-2 rounded-lg p-3 flex border-gray-300"
                        type="text"
                        name="phone"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col py-2">
                    <TextColorLabel className="uppercase text-sm py-2">
                      {t('contactEmail')}
                    </TextColorLabel>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="email"
                      name="email"
                    />
                  </div>
                  <div className="flex flex-col py-2">
                    <TextColorLabel className="uppercase text-sm py-2">
                      {t('contactSubject')}
                    </TextColorLabel>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="subject"
                    />
                  </div>
                  <div className="flex flex-col py-2">
                    <TextColorLabel className="uppercase text-sm py-2">
                      {t('contactMessage')}
                    </TextColorLabel>
                    <textarea
                      className="border-2 rounded-lg p-3 border-gray-300"
                      name="message"></textarea>
                  </div>

                  <button className="w-full p-4 text-gray-100 mt-4">
                    {t('contactSendMessage')}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;

const TextColorH2 = styled.h2`
  color: ${(props) => props.theme.textColor};
`;
const TextColorP = styled.p`
  color: ${(props) => props.theme.textColor};
`;
const TextColorLabel = styled.label`
  color: ${(props) => props.theme.textColor};
`;
const TextColorDiv = styled.div`
  color: ${(props) => props.theme.textColor};
`;
