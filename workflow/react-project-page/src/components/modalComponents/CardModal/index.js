import React from 'react';
import { useSelector } from 'react-redux';

import CommonModal from '../../commonComponents/CommonModal';
import CocktailPicture from './CocktailPicture';
import CocktailSubtitle from './CocktailSubtitle';

const CardModal = ({ closeModal, isShown }) => {
  const cocktail = useSelector(
    (state) => state.addRandomCocktail.randomCocktail
  );
  console.log(cocktail);
  return (
    <>
      <CommonModal
        title="Random Cocktail"
        closeModal={closeModal}
        isShown={isShown}
      >
        <CocktailSubtitle subtitle={cocktail.strDrink} />
        <CocktailPicture url={cocktail.strDrinkThumb} />
      </CommonModal>
    </>
  );
};

export default CardModal;
