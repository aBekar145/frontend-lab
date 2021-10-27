import { addRandomCocktail } from '../../store/actions/actions';

export const fetchCocktail = () => {
  return (dispatch) => {
    fetch('https://stdlab-api.herokuapp.com/api/cocktails/random')
      .then((response) => response.json())
      .then((json) => dispatch(addRandomCocktail(json)));
  };
};
