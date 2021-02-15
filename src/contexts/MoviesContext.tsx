import React, { createContext, FC, Dispatch, SetStateAction, useState } from 'react';
import { SearchItem } from '../api';
import { useLocalStorage } from '../hooks';

export type MoviesContextProps = {
  movies?: SearchItem[];
  setMovies?: Dispatch<SetStateAction<SearchItem[] | undefined>>;
  totalResults?: number;
  setTotalResults?: Dispatch<SetStateAction<number | undefined>>;
  favorites?: SearchItem[];
  setFavorites?: (data: SearchItem[]) => void;
};

export const MoviesContext = createContext<MoviesContextProps>({});

export const MoviesProvider: FC = ({ children }) => {
  const [localFavorites, setLocalFavorites] = useLocalStorage('favorites');
  const [movies, setMovies] = useState<SearchItem[]>();
  const [favorites, _setFavorites] = useState<SearchItem[]>(localFavorites);
  const [totalResults, setTotalResults] = useState<number>();

  const setFavorites = (data: SearchItem[]) => {
    setLocalFavorites(data);
    _setFavorites(data);
  };

  return (
    <MoviesContext.Provider
      value={{ movies, setMovies, favorites, setFavorites, totalResults, setTotalResults }}
    >
      {children}
    </MoviesContext.Provider>
  );
};
