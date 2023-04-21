import { useState, FC } from 'react';
import { FiCopy } from 'react-icons/fi';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useTranslation } from 'react-i18next';

import s from './modalEmail.module.css';
import { AiOutlineMail } from 'react-icons/ai';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 335,
  height: 100,
  bgcolor: 'background.paper',
  // boxShadow: 24,
  p: 4,
};

const ModalEmail = () => {
  const { t } = useTranslation();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [copied, setCopied] = useState(false);
  const textToCopy = 'mrit.works07@gmail.com';

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <div
        onClick={handleOpen}
        className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
        <AiOutlineMail size={24} />
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box className={s.box}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <div className={s.email}>mrit.works07@gmail.com</div>
            <CopyToClipboard text={textToCopy} onCopy={handleCopy}>
              <div className={s.copy}>
                <FiCopy size={30} />
              </div>
            </CopyToClipboard>
            {copied && <p className={s.copied}>{t('modalEmail')}</p>}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalEmail;
