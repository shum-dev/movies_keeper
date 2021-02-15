import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';
import { FavoritesPage, HomePage, Page404 } from '../Pages';

export const Router: FC = () => (
  <Switch>
    <Route exact path="/favorite" component={FavoritesPage} />
    <Route exact path="/" component={HomePage} />
    <Route exact path="*" component={Page404} />
  </Switch>
);
