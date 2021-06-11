import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import AppConteiner from './AppConteiner';

ReactDOM.render(
  <HashRouter>
    <AppConteiner />
  </HashRouter>,
  document.getElementById('root')
);