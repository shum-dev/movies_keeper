import React, { FC } from 'react';
import { Radio } from './Elements/Radio';

export const SearchByGenre: FC = () => {
  return (
    <>
      <Radio name="type" value="movie" />
      <Radio name="type" value="series" />
      <Radio name="type" value="episode" />
    </>
  );
};
