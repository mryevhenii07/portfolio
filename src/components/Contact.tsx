import { useState } from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles } from '@material-ui/core/styles';
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn, FaTelegram } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';

import Img from '../assets/contact.jpg';
import Modal from './modal/modalTelegram/modal';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const [open, setOpen] = useState(true);
  const handleOpen = () => setOpen(false);
  const onClose = () => setOpen(true);

  const { t } = useTranslation();

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
  return (
    <div id="#contact" className="w-full lg:h-screen">
      {!open ? (
        <Modal onClose={onClose} />
      ) : (
        <div className="max-w-[1240px] m-auto px-2 py-16 w-full ">
          <p className="text-xl tracking-widest uppercase text-[#5651e5]">{t('contact')}</p>
          <h2 className="py-4">{t('contactGet')}</h2>
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
                  <h2 className="py-2">{t('contactFullName')}</h2>
                  <p>Front-End Developer</p>
                  <p className="py-4">{t('contactFullNameDescription')}</p>
                </div>
                <div>
                  <p className="uppercase pt-8 text-[#5651e5]">{t('contactWithMe')}</p>
                  <div className="flex items-center justify-between py-4">
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
                      <label className="uppercase text-sm py-2">{t('contactName')}</label>
                      <input
                        className="border-2 rounded-lg p-3 flex border-gray-300"
                        type="text"
                        name="name"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="uppercase text-sm py-2">{t('contactNumber')}</label>
                      <input
                        className="border-2 rounded-lg p-3 flex border-gray-300"
                        type="text"
                        name="phone"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2">{t('contactEmail')}</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="email"
                      name="email"
                    />
                  </div>
                  <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2">{t('contactSubject')}</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="subject"
                    />
                  </div>
                  <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2">{t('contactMessage')}</label>
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
