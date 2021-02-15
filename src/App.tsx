import React, { FC } from 'react';
import { Header, Sidebar, Main, Title } from './components/layout';

import './styles/App.css';

export const App: FC = () => {
  return (
    <div className="App-container">
      <Header />
      <Title />
      <Sidebar />
      <Main />
    </div>
  );
};
