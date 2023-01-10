import React, { FC, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import '../../styles/Title.css';

const titlesDict: Record<string, string> = {
  '/': '',
  '/favorite': 'Starred Movies',
};

export const Title: FC = () => {
  const { pathname } = useLocation();
  const [title, setTitle] = useState('');

  useEffect(() => {
    setTitle(titlesDict[pathname]);
  }, [pathname]);

  return (
    <div className="Title-container">
      <div>{title}</div>
    </div>
  );
};
