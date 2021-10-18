import React from 'react';

import CommonModal from '../../commonComponents/CommonModal';

const AuthenticationModal = ({ closeModal, isShown }) => {
  return (
    <CommonModal
      closeModal={closeModal}
      isShown={isShown}
      title="Authentication"
    >
      <h3>Content Authentication Modal</h3>
    </CommonModal>
  );
};

export default AuthenticationModal;
