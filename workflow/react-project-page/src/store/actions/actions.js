import { CLOSE_MODAL, OPEN_MODAL } from './actionTypes';

export const closeModal = () => {
  return {
    type: CLOSE_MODAL,
  };
};

export const openModal = (key) => {
  return {
    type: OPEN_MODAL,
    payload: key,
  };
};
