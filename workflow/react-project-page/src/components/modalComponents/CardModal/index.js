import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CommonModal from '../../commonComponents/CommonModal';

const CardModal = ({ closeModal, isShown }) => {
  const dispatch = useDispatch();
  const cocktail = useSelector((state) => state);
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
