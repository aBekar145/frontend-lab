import React from 'react';

import CommonModal from '../../commonComponents/CommonModal';
import CardModalHeader from './CardModalHeader';

const CardModal = ({ closeModal, isShown }) => {
  return (
    <>
      <CommonModal
        title="Random Coctail"
        closeModal={closeModal}
        isShown={isShown}
      >
        <CardModalHeader
          Coctail
          title="Random Coctail"
          closeModal={closeModal}
        />
      </CommonModal>
    </>
  );
};

export default CardModal;
