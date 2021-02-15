import React, { FC, ReactPortal, useContext } from 'react';
import ReactDOM from 'react-dom';

import { Loader } from '../components/Loader';
import { ModalContext } from '../contexts';

import '../styles/Modal.css';

type ModalProps = {
  title?: string;
  onClose: () => void;
  content?: JSX.Element;
  actions?: JSX.Element;
};

const ModalContent: FC<ModalProps> = ({ title, onClose, content, actions }) => {
  return (
    <div className="Modal-container" onClick={onClose}>
      <div className="Modal-body" onClick={(e) => e.stopPropagation()}>
        {!content ? (
          <Loader />
        ) : (
          <>
            <div className="Modal-header">
              <h3>{title}</h3>
            </div>
            <hr />
            <div className="Modal-content">{content}</div>
          </>
        )}
        <hr />
        <div className="Modal-actions">{actions}</div>
      </div>
    </div>
  );
};

export const Modal = (props: ModalProps): ReactPortal | null => {
  const { isOpened } = useContext(ModalContext);
  const modalRoot = window.document.getElementById('modal');

  return isOpened && modalRoot ? ReactDOM.createPortal(<ModalContent {...props} />, modalRoot) : null;
};
