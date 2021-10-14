import React from 'react';

import CommonModal from '../../commonComponents/CommonModal';

const CardModal = ({ closeModal, isShown }) => {
  return (
    <>
      <CommonModal
        title="Random Coctail"
        closeModal={closeModal}
        isShown={isShown}
      >
        <h3>Content Random Coctail Modal</h3>
      </CommonModal>
    </>
  );
};

export default CardModal;
