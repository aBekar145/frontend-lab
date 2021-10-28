import React from 'react';
import { useSelector } from 'react-redux';

const CocktailRecipe = () => {
  const cocktail = useSelector(
    (state) => state.addRandomCocktail.randomCocktail
  );
  console.log(cocktail);

  const ingredientKeys = Object.keys(cocktail);
  const ingredientValues = [];
  const measureValues = [];

  ingredientKeys.map((key) => {
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
      case 'strIngredient10':
      case 'strIngredient11':
      case 'strIngredient12':
      case 'strIngredient13':
      case 'strIngredient14':
      case 'strIngredient15':
        return ingredientValues.push(cocktail[key]);
      default:
        return key;
    }
  });

  ingredientKeys.map((key) => {
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
      case 'strMeasure10':
      case 'strMeasure11':
      case 'strMeasure12':
      case 'strMeasure13':
      case 'strMeasure14':
      case 'strMeasure15':
        return measureValues.push(cocktail[key]);
      default:
        return key;
    }
  });
  console.log(ingredientValues);
  console.log(measureValues);

  const convertToObj = (ingredientArray, measureArray) => {
    if (
      ingredientArray.length != measureArray.length ||
      ingredientArray.length == 0 ||
      measureArray.length == 0
    ) {
      return null;
    }
    const recipeObject = {};
    ingredientArray.forEach((key, value) => {
      if (key) {
        recipeObject[key] = measureArray[value];
      }
    });
    return recipeObject;
  };

  const recipeObject = convertToObj(ingredientValues, measureValues);
  console.log(recipeObject);
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
