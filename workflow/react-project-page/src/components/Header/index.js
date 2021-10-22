import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import MainLogo from './MainLogo';
import AuthorizationButton from './AuthorizationButton';
import AuthenticationModal from '../modalComponents/AuthenticationModal';

import { openHeaderModal, closeHeaderModal } from '../../store/actions/actions';

import classes from './Header.module';

const Header = () => {
    const dispatch = useDispatch();
    const isModalOpened = useSelector(
        (state) => state.headerModalReducer.isModalOpened
    );

    const openModal = () => {
        dispatch(openHeaderModal());
    };

    const closeModal = () => {
        dispatch(closeHeaderModal());
    };

    return (
        <header className={classes.header}>
            <div className={classes.contextWrapper}>
                <MainLogo />
                <AuthorizationButton openAuthModal={openModal} />
                <AuthenticationModal
                    closeModal={closeModal}
                    isShown={isModalOpened}
                />
            </div>
        </header>
    );
};

export default Header;
