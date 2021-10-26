import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CommonModal from '../../commonComponents/CommonModal';
import { fetchCustomers } from '../../../helpers/asyncActions/randomCocktail';

const CardModal = ({ closeModal, isShown }) => {
  const dispatch = useDispatch();
  const cocktail = useSelector((state) => state.addRandomCocktail.customers);

  console.log(cocktail);
  return (
    <>
      <CommonModal
        title="Random Coctail"
        closeModal={closeModal}
        isShown={isShown}
      >
        <h3>Content Random Coctail Modal</h3>

        <button onClick={() => dispatch(fetchCustomers())}>Fetch</button>
      </CommonModal>
    </>
  );
};

export default CardModal;
