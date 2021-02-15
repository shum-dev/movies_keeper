import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import { MoviesProvider, ModalProvider } from './contexts';

import './styles/Index.css';

ReactDOM.render(
  <BrowserRouter>
    <MoviesProvider>
      <ModalProvider>
        <App />
      </ModalProvider>
    </MoviesProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
