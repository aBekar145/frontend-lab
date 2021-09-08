import './style.scss';
import './visualizer';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';

ReactDOM.render(
  <React.StrictMode>
    <App title={'I am from props!'} />
  </React.StrictMode>,
  document.getElementById('root')
);