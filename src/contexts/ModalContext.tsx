import React, { createContext, FC, Dispatch, SetStateAction, useState } from 'react';
import { MovieDetails } from '../api';

export type ModalContextProps = {
  isOpened?: boolean;
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
  data?: MovieDetails;
  setData?: Dispatch<SetStateAction<MovieDetails | undefined>>;
};

export const ModalContext = createContext<ModalContextProps>({});

export const ModalProvider: FC = ({ children }) => {
  const [isOpened, setIsOpen] = useState<boolean>(false);
  const [data, setData] = useState<MovieDetails>();

  return (
    <ModalContext.Provider value={{ isOpened, data, setIsOpen, setData }}>{children}</ModalContext.Provider>
  );
};
