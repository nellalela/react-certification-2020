// import 'bootstrap/dist/css/bootstrap.min.css';
// import bootstrap from 'bootstrap'
import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import './global.scss';

ReactDOM.render(
  // eslint-disable-next-line react/jsx-filename-extension
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
