import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { StarIcon } from '../../assets/icons/StarIcon';

import '../../styles/Header.css';

export const Header: FC = () => {
  return (
    <div className="Header-container">
      <NavLink exact to="/" activeClassName="Header-link_active" className="Header-link">
        Movies Keeper
      </NavLink>
      <NavLink exact to="/favorite" activeClassName="Header-link_active" className="Header-link">
        <StarIcon width={25} height={25} borderColor="white" />
        <span style={{ marginTop: 3 }}>Starred Movies</span>
      </NavLink>
    </div>
  );
};
