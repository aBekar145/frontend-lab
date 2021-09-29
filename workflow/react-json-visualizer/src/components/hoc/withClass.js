import React from 'react';

const withClass = (Component, className) => {
  return (props) => {
    return (
      <section className={className}>
        <Component />
      </section>
    );
  };
};

export default withClass;
