import React, { FC, useContext, useEffect, useState, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { DropResult } from 'react-beautiful-dnd';

import { SearchItem } from '../../api';
import { Favorites } from '../../components/Favorites';
import { MoviesContext } from '../../contexts/MoviesContext';
import { reorder } from './helpers';

export const FavoritesContainer: FC = () => {
  const { favorites, setFavorites } = useContext(MoviesContext);
  const [filteredFavorites, setFilteredFavorites] = useState<SearchItem[] | undefined>(favorites);

  const { search } = useLocation();

  useEffect(() => {
    if (!favorites) return;
    const searchParams = new URLSearchParams(search);
    const term = searchParams.get('search');
    const type = searchParams.get('type');

    let result = [...favorites];

    if (term && type) {
      result = favorites
        .filter((item) => item.Title.toLowerCase().startsWith(term.toLowerCase()))
        .filter((item) => item.Type === type);
    } else if (term) {
      result = favorites.filter((item) => item.Title.toLowerCase().startsWith(term.toLowerCase()));
    } else if (type) {
      result = favorites.filter((item) => item.Type === type);
    }

    setFilteredFavorites(result);
  }, [search, favorites]);

  const removeFromFavorites = useCallback(
    (id: string) => {
      if (setFavorites && favorites) {
        setFavorites(favorites.filter((movie) => movie.imdbID !== id));
      }
    },
    [favorites?.length],
  );

  const onDragEnd = (result: DropResult) => {
    if (!favorites || !setFavorites) return;
    if (!result.destination) return;
    if (result.destination.index === result.source.index) return;

    const reOrderedFavorites = reorder(favorites, result.source.index, result.destination.index);
    setFavorites(reOrderedFavorites);
  };

  return (
    <Favorites
      removeFromFavorites={removeFromFavorites}
      filteredFavorites={filteredFavorites}
      onDragEnd={onDragEnd}
    />
  );
};
