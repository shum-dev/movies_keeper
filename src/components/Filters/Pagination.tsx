import React, { FC } from 'react';
import { useLocation } from 'react-router-dom';

import { PageButton } from './Elements';

type PaginationProps = {
  pageSize: number;
  totalResults: number;
};

export const Pagination: FC<PaginationProps> = ({ pageSize, totalResults }) => {
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const currentPage = searchParams.get('page') || 1;
  const prevPage = +currentPage - 1 || null;
  const nextPage = +currentPage + 1 || null;

  const totalPages = Math.ceil(totalResults / pageSize);

  const pages = Array.from({ length: totalPages }, (item, index) => {
    const pageNumber = index + 1;

    let button;

    if (currentPage === 1 && currentPage === pageNumber) {
      button = {
        component: <PageButton key={index} name="page" pageNumber={1} />,
      };
    }

    if (currentPage && +currentPage !== 1 && prevPage && prevPage !== 1 && pageNumber === 1) {
      button = {
        component: <PageButton key={index} name="page" pageNumber={1} />,
      };
    }

    if (prevPage && prevPage === pageNumber) {
      button = {
        component: <PageButton key={index} name="page" pageNumber={pageNumber} />,
      };
    }

    if (currentPage && pageNumber === +currentPage) {
      button = {
        component: <PageButton key={index} name="page" pageNumber={pageNumber} />,
      };
    }

    if (nextPage && nextPage === pageNumber) {
      button = {
        component: <PageButton key={index} name="page" pageNumber={pageNumber} />,
      };
    }

    if (totalPages && totalPages === pageNumber) {
      button = {
        component: <PageButton key={index} name="page" pageNumber={pageNumber} />,
      };
    }

    return button;
  });

  return totalPages > 1 ? (
    <>
      {pages.map((page) => {
        return page ? page.component : null;
      })}
    </>
  ) : null;
};
