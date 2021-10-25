import { addRandomCocktail } from '../../store/reducers/addRandomCocktail';

export const fetchRandomCocktail = () => {
  return function (dispatch) {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => dispatch(addRandomCocktail(json)));
  };
};
