import {
  OPEN_MAIN_MODAL,
  CLOSE_MAIN_MODAL,
  CLOSE_HEADER_MODAL,
  OPEN_HEADER_MODAL,
} from './actionTypes';

export function openMainModal(key) {
  return {
    type: OPEN_MAIN_MODAL,
    payload: key,
  };
}

export function closeMainModal() {
  return {
    type: CLOSE_MAIN_MODAL,
  };
}

export function closeHeaderModal() {
  return {
    type: CLOSE_HEADER_MODAL,
  };
}

export function openHeaderModal(key) {
  return {
    type: OPEN_HEADER_MODAL,
    payload: key,
  };
}
