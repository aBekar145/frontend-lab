import React from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import CocktailPicture from './CocktailPicture';
import CocktailSubtitle from './CocktailSubtitle';
import CocktailRecipe from './CocktailRecipe';

import clasess from './ContentModal.module.scss';

const ContentModal = () => {
  const cocktail = useSelector(
    (state) => state.addRandomCocktail.randomCocktail
  );
  console.log(cocktail);
  return (
    <div className={clasess.wrap}>
      <button>
        <FontAwesomeIcon className={clasess.icon} icon={faStar} />
      </button>
      <CocktailSubtitle subtitle={cocktail.strDrink} />
      <CocktailPicture urlImg={cocktail.strDrinkThumb} />
      <CocktailRecipe />
    </div>
  );
};

export default ContentModal;
