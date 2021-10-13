import React from 'react';

import CommonModal from '../../commonComponents/CommonModal';
import CommonModalHeader from './AuthenticationModalHeader';

const AuthenticationModal = ({ closeModal, isShown }) => {
  return (
    <CommonModal closeModal={closeModal} isShown={isShown}>
      <CommonModalHeader title="Authentication" closeModal={closeModal} />
    </CommonModal>
  );
};

export default AuthenticationModal;
