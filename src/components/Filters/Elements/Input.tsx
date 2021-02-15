import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';

import { usePathName, useDebounce } from './helpers';

type InputProps = {
  name: string;
  className: string;
  placeholder: string;
};

export const Input = ({ name, className, placeholder }: InputProps): JSX.Element => {
  const history = useHistory();
  const { search } = useLocation();
  const paramValue = new URLSearchParams(search).get(name);
  const [value, setValue] = useState(paramValue || '');

  const getSearchString = usePathName(name);
  const debounce$ = useDebounce();

  useEffect(() => {
    const subscription = debounce$.subscribe((newVal) => {
      history.push({ search: getSearchString(newVal) });
    });
    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!paramValue) {
      setValue('');
    }
  }, [paramValue]);

  useEffect(() => {
    if (!value) {
      history.push({ search: getSearchString('') });
    }
  }, [value]);

  return (
    <div style={{ position: 'relative' }}>
      <input
        className={className}
        placeholder={placeholder}
        onChange={({ target }) => {
          debounce$.next(target.value);
          setValue(target.value);
        }}
        value={value}
      />
    </div>
  );
};
