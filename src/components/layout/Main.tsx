import React, { FC } from 'react';
import { Router } from '../../router';

import '../../styles/Main.css';

export const Main: FC = () => {
  return (
    <div className="Main-container">
      <Router />
    </div>
  );
};
