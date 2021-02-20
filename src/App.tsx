import './App.scss';

import React, { FC } from 'react';
import { AppLayout } from 'components/layouts/AppLayout/AppLayout';
import { Route, Switch } from 'react-router-dom';
import { Home } from 'pages/Home/Home';
import { Countries } from 'pages/Countries/Countries';
import { NotFound } from 'pages/NotFound/NotFound';
import { Country } from 'pages/Country/Country';
import { CityWeather } from 'pages/CityWeather/CityWeather';
import { Favorites } from 'pages/Favorites/Favorites';

const App: FC = () => {
  return (
    <AppLayout>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/weather/:cityName" component={CityWeather} />
        <Route path="/countries" exact component={Countries} />
        <Route path="/countries/:countryName" exact component={Country} />
        <Route path="/favorites" exact component={Favorites} />
        <Route component={NotFound} />
      </Switch>
    </AppLayout>
  );
};

export default App;
