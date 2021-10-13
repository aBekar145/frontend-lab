import React from 'react';
import CommonModal from '../../commonComponents/CommonModal';

const CardModal = ({ closeModal, isShown }) => {
  return (
    <>
      <CommonModal
        title="Random Coctail"
        closeModal={closeModal}
        isShown={isShown}
      />
    </>
  );
};

export default CardModal;
