import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

export const ReactModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleClose = () => {
    setModalIsOpen(!modalIsOpen);
  };

  return (
    <div>
      <button onClick={handleClose}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        shouldCloseOnOverlayClick={false}
        onRequestClose={handleClose}
        style={{
          overlay: {
            background: "purple",
          },
          content: {
            color: "orange",
          },
        }}
      >
        <h2>Modal Header</h2>
        <p>Modal Body</p>
      </Modal>
    </div>
  );
};
