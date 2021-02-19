import './App.scss';

import React, { FC } from 'react';
import { AppLayout } from 'components/layouts/AppLayout';
import { Route, Switch } from 'react-router-dom';
import { Home } from 'pages/Home/Home';
import { Countries } from 'pages/Countries/Countries';
import { NotFound } from 'pages/NotFound/NotFound';
import { Country } from 'pages/Country/Country';

const App: FC = () => {
  return (
    <AppLayout>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/countries" exact component={Countries} />
        <Route path="/countries/:countryName" exact component={Country} />
        <Route component={NotFound} />
      </Switch>
    </AppLayout>
  );
};

export default App;
