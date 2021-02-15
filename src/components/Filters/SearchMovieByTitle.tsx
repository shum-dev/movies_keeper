import React from 'react';
import { Input } from './Elements/Input';

type SearchMovieProps = {
  className: string;
  placeholder: string;
};

export const SearchMovieByTitle = ({ className, placeholder }: SearchMovieProps): JSX.Element => {
  return <Input name="search" className={className} placeholder={placeholder} />;
};
