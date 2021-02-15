import { useState, useEffect, Dispatch } from 'react';
import { SearchItem } from '../api';

type ReturnTuple = [any, Dispatch<any>];

export const useLocalStorage: (key: string) => ReturnTuple = (key: string) => {
  const [state, setState] = useState(() => {
    const strVal = window.localStorage.getItem(key);
    if (!strVal) return null;

    let parsedVal;

    try {
      parsedVal = JSON.parse(strVal);
    } catch (e) {
      return null;
    }
    return parsedVal;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state, setState]);

  return [state, setState];
};
