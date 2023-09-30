// Modal.js
import React, { forwardRef, useImperativeHandle, useState } from "react";
import Button from "./Button";

const Modal = forwardRef(({ title, textButton, children }, ref) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  useImperativeHandle(ref, () => ({
    openModal,
    closeModal,
  }));

  return (
    <>
      <Button onClick={openModal}> 
      {textButton}
      </Button>

      {showModal && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <div className="modal-container bg-white rounded-lg  md:w-2/4 lg:max-w-xl w-full  ">
            <div className="modal-header flex justify-between p-4 bg-indigo-50 ">
              <h2 className="text-lg font-semibold">{title}</h2>

              <button
                onClick={closeModal}
                className=" text-gray-600 hover:text-gray-800"
              >
                Cerrar
              </button>
            </div>
            <div className="modal-body p-4">{children}</div>
          </div>
        </div>
      )}
    </>
  );
});

export default Modal;
