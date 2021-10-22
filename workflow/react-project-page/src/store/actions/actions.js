import {
    OPEN_MAIN_MODAL,
    CLOSE_MAIN_MODAL,
    CLOSE_HEADER_MODAL,
    OPEN_HEADER_MODAL,
} from './actionTypes';

export const openMainModal = (key) => {
    return {
        type: OPEN_MAIN_MODAL,
        payload: key,
    };
};

export const closeMainModal = () => {
    return {
        type: CLOSE_MAIN_MODAL,
    };
};

export const closeHeaderModal = () => {
    return {
        type: CLOSE_HEADER_MODAL,
    };
};

export const openHeaderModal = (key) => {
    return {
        type: OPEN_HEADER_MODAL,
        payload: key,
    };
};
