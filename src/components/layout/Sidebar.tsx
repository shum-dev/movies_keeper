import React, { FC } from 'react';
import { SearchMovieByTitle, SearchByGenre } from '../Filters';

import '../../styles/Sidebar.css';

export const Sidebar: FC = () => {
  return (
    <div className="Sidebar-container">
      <SearchMovieByTitle className="Sidebar-input" placeholder="Enter 3 char" />

      <div className="Sidebar-Checkboxes">
        <SearchByGenre />
      </div>
    </div>
  );
};
