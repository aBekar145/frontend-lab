import React from 'react';
import { useSelector } from 'react-redux';

const CocktailRecipe = () => {
  const cocktail = useSelector(
    (state) => state.addRandomCocktail.randomCocktail
  );

  const ingredientKeys = Object.keys(cocktail);
  const ingredientValues = [];
  const measureValues = [];

  ingredientKeys.forEach((key) => {
    // console.log(`${key} : ${cocktail[key]}`);
    console.log(key);
    switch (key) {
      case 'strIngredient1':
      case 'strIngredient2':
      case 'strIngredient3':
      case 'strIngredient4':
      case 'strIngredient5':
      case 'strIngredient6':
      case 'strIngredient7':
      case 'strIngredient8':
      case 'strIngredient9':
        return ingredientValues.push(cocktail[key]);
      default:
        return key;
    }
  });

  ingredientKeys.forEach((key) => {
    // console.log(`${key} : ${cocktail[key]}`);
    console.log(key);
    switch (key) {
      case 'strMeasure1':
      case 'strMeasure2':
      case 'strMeasure3':
      case 'strMeasure4':
      case 'strMeasure5':
      case 'strMeasure6':
      case 'strMeasure7':
      case 'strMeasure8':
      case 'strMeasure9':
        return measureValues.push(cocktail[key]);
      default:
        return key;
    }
  });
  console.log(ingredientValues);
  console.log(measureValues);

  return (
    <table>
      <tbody>
        <tr>
          <th></th>
          <th>Ingredient</th>
          <th>Qnty</th>
          <th></th>
        </tr>
      </tbody>
    </table>
  );
};

export default CocktailRecipe;
