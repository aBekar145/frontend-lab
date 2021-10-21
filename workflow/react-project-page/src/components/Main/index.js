import React, { useState } from 'react';
import { connect } from 'react-redux';

import MainTitle from './MainTitle';
import ContentBlock from './ContentBlock';
import CardModal from '../modalComponents/CardModal';

import { openMainModal, closeMainModal } from '../../store/actions/actions';

import classes from './Main.module.scss';

const Main = (props) => {
  const openModal = () => {
    props.openModal(true);
  };

  const closeModal = () => {
    props.closeModal(false);
  };

  return (
    <main className={classes.main}>
      <div className={classes.wrapper}>
        <MainTitle />
        <ContentBlock openCardModal={openModal} />
        <CardModal closeModal={closeModal} isShown={props.isModalOpened} />
      </div>
    </main>
  );
};

function mapStateToProps(state) {
  return {
    isModalOpened: state.mainModalReducer.isModalOpened,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    openModal: () => dispatch(openMainModal(key)),
    closeModal: () => dispatch(closeMainModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
