import React from 'react';

import CommonModal from '../../commonComponents/CommonModal';

const AuthenticationModal = ({ closeModal, isShown }) => {
  return (
    <>
      <CommonModal
        title="Authentication"
        closeModal={closeModal}
        isShown={isShown}
      />
    </>
  );
};

export default AuthenticationModal;
