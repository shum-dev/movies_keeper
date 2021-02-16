import React, { FC } from 'react';
import { useLocation } from 'react-router-dom';

import { PageButton } from './Elements';

type PaginationProps = {
  pageSize: number;
  totalResults: number;
  window?: number;
};

export const Pagination: FC<PaginationProps> = ({ pageSize, totalResults, window = 5 }) => {
  const totalPages = Math.ceil(totalResults / pageSize);
  if (totalPages < 1) return null;

  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const currentPage = Number(searchParams.get('page')) || 1;

  let buttonGroup: JSX.Element[] = [];

  let maxLeft = currentPage - Math.floor(window / 2);
  let maxRight = currentPage + Math.floor(window / 2);

  if (maxLeft < 1) {
    maxLeft = 1;
    maxRight = window;
  }

  if (maxRight > totalPages) {
    maxLeft = totalPages - (window - 1);

    if (maxLeft < 1) {
      maxLeft = 1;
    }
    maxRight = totalPages;
  }

  for (let count = maxLeft; count <= maxRight; count++) {
    buttonGroup.push(<PageButton key={count} name="page" pageNumber={count} />);
  }

  if (currentPage != 1 && maxLeft > 1) {
    buttonGroup = [<PageButton key={'first'} name="page" pageNumber={1} />, ...buttonGroup];
  }

  if (currentPage != totalPages && maxRight < totalPages) {
    buttonGroup.push(<PageButton key={'Last'} name="page" pageNumber={totalPages} />);
  }

  return <>{buttonGroup}</>;
};
