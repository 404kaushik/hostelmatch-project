import React, { useState } from 'react';

const Images = ( p ) => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      {modalOpen ? (
        <Modal isOpen={modalOpen} closeModal={closeModal}>
          <div className="flex flex-col sm:grid sm:grid-cols-1 sm:m-2 gap-2 overscroll-none relative z-60">
            {p.images.map((image, index) => (
              <img key={index} src={image} className="mx-auto sm:rounded-md" />
            ))}
          </div>
        </Modal>
      ) : (
        <div
          className="sm:grid sm:grid-cols-2 md:grid-cols-4 grid-rows-2 gap-2 sm:rounded-lg overflow-hidden relative cursor-pointer max-h-[30rem]"
          onClick={openModal}
        >
          <img src={p.images[0]} className="md:col-span-2 row-span-2 w-full h-full" />
          <img src={p.images[1]} className="w-full h-full hidden sm:block" />
          <img src={p.images[2]} className="w-full h-full hidden sm:block" />
          <img src={p.images[3]} className="w-full h-full hidden md:block" />
          <img src={p.images[4]} className="w-full h-full hidden md:block" />

          <div className="absolute bottom-2 right-2 bg-sun-400 text-sm text-sun-50 font-medium p-1 rounded-md">
            See all {p.images.length} photos
          </div>
        </div>
      )}
    </>
  );
};

const Modal = ({ isOpen, closeModal, children }) => {
  return isOpen ? (
    <div className="fixed left-0 top-0 z-[1055] h-full w-full overflow-y-auto overflow-x-hidden outline-none bg-white">
      <div className="sm:max-w-6xl sm:mx-auto">
        {children}
        <div
          className="fixed top-4 right-4 text-sun-50 bg-sun-400 font-medium px-2 py-1 rounded-md cursor-pointer"
          onClick={closeModal}
        >
          X
        </div>
      </div>
    </div>
  ) : null;
};

export default Images;