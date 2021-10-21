import React, { useState } from 'react';
import { connect } from 'react-redux';

import MainTitle from './MainTitle';
import ContentBlock from './ContentBlock';
import CardModal from '../modalComponents/CardModal';

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
    isModalOpened: state.headerModalReducer.isModalOpened,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    openModal: () => dispatch({ type: 'OPEN_MODAL' }),
    closeModal: () => dispatch({ type: 'CLOSE_MODAL' }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
