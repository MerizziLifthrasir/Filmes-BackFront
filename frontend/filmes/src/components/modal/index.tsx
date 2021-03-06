import React from 'react';
import iconX from '../../assets/images/x.svg';

import '../modal/style.css';

interface ModalProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ title, isOpen, onClose }) => {
  const outsideRef = React.useRef(null);

  const handleCloseOnOverlay = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (e.target === outsideRef.current) {
      onClose();
    }
  }

  return isOpen ? (
    <div className={'modal'}>
      <div
        ref={outsideRef}
        className={'modal__overlay'}
        onClick={handleCloseOnOverlay}
      />
      <div className={'modal__box'}>
        <button
          className={'modal__close'}
          onClick={onClose}
        >
          <img src={iconX} alt={'close'} />
        </button>
        <div className={'modal__title'}>
          {title}
        </div>
      </div>
    </div>
  ) : null;
};
export default Modal;