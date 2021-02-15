import React, { FC } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { usePathName } from './helpers';

type PageButtonProps = {
  pageNumber: number;
  name: string;
};

export const PageButton: FC<PageButtonProps> = ({ name, pageNumber }) => {
  const history = useHistory();
  const { search } = useLocation();
  const paramValue = new URLSearchParams(search).get(name);

  const getSearchString = usePathName(name);

  // TODO replace buttons with NavLink
  const handleClick = () => {
    if (!paramValue) {
      history.push({ search: getSearchString(`${pageNumber}`) });
      return;
    }
    if (+paramValue === pageNumber) {
      history.push({ search: getSearchString('') });
    } else {
      history.push({ search: getSearchString(`${pageNumber}`) });
    }
  };
  const style = paramValue
    ? {
        backgroundColor: +paramValue === pageNumber ? '#97dcfc' : 'white',
        borderColor: '#65C5F2',
      }
    : {
        backgroundColor: pageNumber === 1 ? '#97dcfc' : 'white',
      };

  return (
    <button onClick={handleClick} style={style}>
      {pageNumber}
    </button>
  );
};
