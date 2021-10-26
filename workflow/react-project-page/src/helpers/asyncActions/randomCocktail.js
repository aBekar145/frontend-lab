import { addManyCustomers } from '../../store/actions/actions';

export const fetchCustomers = () => {
  return (dispatch) => {
    fetch('https://stdlab-api.herokuapp.com/api/cocktails/random')
      .then((response) => response.json())
      .then((json) => dispatch(addManyCustomers(json)));
  };
};
