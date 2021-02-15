import React from 'react';
import { MovieDetails } from '../../api/index';

export const renderModalContent = (details?: MovieDetails): JSX.Element | undefined =>
  !details ? undefined : (
    <ul style={{ listStyle: 'none' }}>
      <li>
        <strong>Year:</strong> <span>{details.Year}</span>
      </li>
      <li>
        <strong>Country:</strong> <span>{details.Country}</span>
      </li>
      <li>
        <strong>Language:</strong> <span>{details.Language}</span>
      </li>
      <li>
        <strong>Runtime:</strong> <span>{details.Runtime}</span>
      </li>
      <li>
        <strong>Director:</strong> <span>{details.Director}</span>
      </li>
      <li>
        <strong>Genre:</strong> <span>{details.Genre}</span>
      </li>
      <li>
        <strong>Awards:</strong> <span>{details.Awards}</span>
      </li>
      <li>
        <strong>Plot:</strong> <span>{details.Plot}</span>
      </li>
    </ul>
  );
