import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

const Portal = ({ children }) => {
  const [modalContainer] = useState(document.createElement('div'));

  useEffect(() => {
    let modalRoot = document.getElementById('modal-root');

    if (!modalRoot) {
      const templateElement = document.createElement('div');
      templateElement.id = 'modal-root';
      document.body.append(templateElement);
      modalRoot = templateElement;
    } else {
      modalRoot.appendChild(modalContainer);
    }

    return function cleanup() {
      modalRoot.removeChild(modalContainer);
    };
  }, []);

  return ReactDOM.createPortal(children, modalContainer);
};

export default Portal;
