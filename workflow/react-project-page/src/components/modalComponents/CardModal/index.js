import React from 'react';

import CommonModal from '../../commonComponents/CommonModal';
import ContentModal from './ContentModal';

const CardModal = ({ closeModal, isShown }) => {
  return (
    <>
      <CommonModal
        title="Random Cocktail"
        closeModal={closeModal}
        isShown={isShown}
      >
        <ContentModal />
      </CommonModal>
    </>
  );
};

export default CardModal;
