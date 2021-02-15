import React, { FC } from 'react';

import { SearchItem } from '../../api';
import { ListItem } from '../ListItem';

import '../../styles/Home.css';

type HomeProps = {
  movies?: SearchItem[];
  favorites?: SearchItem[];
  addToFavorites: (item: SearchItem) => void;
  handleOpenModal: (id: string) => void;
  pagination?: JSX.Element;
};

export const Home: FC<HomeProps> = ({
  movies,
  favorites,
  addToFavorites,
  handleOpenModal,
  pagination: Pagination,
}) => {
  return (
    <div className="Home-container">
      <div className="Home-pagination">{Pagination && Pagination}</div>
      {movies && !movies.length && 'Movies list is empty.'}
      <ul className="Home-list">
        {movies &&
          movies.map((item, index) => (
            <ListItem
              key={item.imdbID + index}
              {...item}
              onItemClick={() => handleOpenModal(item.imdbID)}
              starClickAction={() => addToFavorites(item)}
              isFavorite={!!favorites?.find((movie) => movie.imdbID === item.imdbID)}
            />
          ))}
      </ul>
    </div>
  );
};
