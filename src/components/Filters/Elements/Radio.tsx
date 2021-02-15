import React, { FC, ChangeEvent, MouseEvent } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { usePathName } from './helpers';

type RadioProps = {
  name: string;
  value: string;
};

export const Radio: FC<RadioProps> = ({ name, value }) => {
  const history = useHistory();
  const { search } = useLocation();
  const paramValue = new URLSearchParams(search).get(name);

  const getSearchString = usePathName(name);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    history.push({ search: getSearchString(e.target.value) });
  };

  const handleClick = (e: MouseEvent<HTMLInputElement>) => {
    if (paramValue === e.currentTarget.value) {
      history.push({ search: getSearchString('') });
    }
  };

  return (
    <>
      <input
        id={value}
        type="radio"
        name={name}
        value={value}
        onChange={handleChange}
        onClick={handleClick}
        checked={paramValue === value}
      />
      <label htmlFor={value}>{value}</label>
    </>
  );
};
