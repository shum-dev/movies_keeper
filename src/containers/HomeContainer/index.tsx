import React, { FC, useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { Home } from '../../components/Home';
import { Pagination } from '../../components/Filters';
import { apiSearchMovie, SearchItem, apiGetMovieById } from '../../api';
import { Modal } from '../index';
import { MoviesContext, ModalContext } from '../../contexts';
import { renderModalContent } from './helpers';

export const HomeContainer: FC = () => {
  const { movies, setMovies, totalResults, setTotalResults, favorites, setFavorites } = useContext(
    MoviesContext,
  );
  const { setIsOpen, data, setData } = useContext(ModalContext);
  const { search } = useLocation();

  useEffect(() => {
    return () => {
      if (setMovies) setMovies([]);
    };
  }, []);

  useEffect(() => {
    const searchParams = new URLSearchParams(search);
    const title = searchParams.get('search');
    const type = searchParams.get('type');
    const page = searchParams.get('page');

    if (title) {
      if (!setMovies || !setTotalResults) return;
      apiSearchMovie({ title, type, page })
        .then(({ Search, Response, totalResults }) => {
          if (Response === 'False') {
            setMovies([]);
            setTotalResults(0);
          } else {
            setMovies(Search);
            setTotalResults(+totalResults);
          }
        })
        .catch((err) => console.log('error: ', err));
    } else {
      if (!setMovies || !setTotalResults) return;
      setMovies([]);
      setTotalResults(0);
    }
  }, [search]);

  const handleOpenModal = (id: string) => {
    if (!setIsOpen || !setData) return;
    setIsOpen(true);
    apiGetMovieById(id)
      .then((res) => {
        setData(res);
      })
      .catch((err) => console.log('apiGetMovieById error: ', err));
  };

  const handleCloseModal = () => {
    if (!setIsOpen || !setData) return;
    setIsOpen(false);
    setData(undefined);
  };

  const addToFavorites = (item: SearchItem) => {
    if (!setFavorites) return;
    if (favorites?.length) {
      if (favorites.find((movie) => movie.imdbID === item.imdbID)) {
        setFavorites(favorites.filter((movie) => movie.imdbID !== item.imdbID));
        return;
      } else {
        setFavorites([...favorites, item]);
      }
    } else {
      setFavorites([item]);
    }
  };

  const PaginationSlot = totalResults ? <Pagination pageSize={10} totalResults={totalResults} /> : undefined;

  return (
    <>
      <Home
        movies={movies}
        favorites={favorites}
        addToFavorites={addToFavorites}
        handleOpenModal={handleOpenModal}
        pagination={PaginationSlot}
      />
      <Modal
        title={data?.Title}
        onClose={handleCloseModal}
        content={renderModalContent(data)}
        actions={<button onClick={handleCloseModal}>Close</button>}
      />
    </>
  );
};
