import './App.scss';

import React, { FC, Suspense, lazy } from 'react';
import { AppLayout } from 'components/layouts/AppLayout/AppLayout';
import { Route, Switch } from 'react-router-dom';
import { NotFound } from 'pages/NotFound/NotFound';
import { Favorites } from 'pages/Favorites/Favorites';
import { Spinner } from 'components/Atoms/Spinner/Spinner';

const Home = lazy(() => import('pages/Home/Home'));
const CityWeather = lazy(() => import('pages/CityWeather/CityWeather'));
const Countries = lazy(() => import('pages/Countries/Countries'));
const Country = lazy(() => import('pages/Country/Country'));

const App: FC = () => {
  return (
    <AppLayout>
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/weather/:cityName" component={CityWeather} />
          <Route path="/countries" exact component={Countries} />
          <Route path="/countries/:countryName" exact component={Country} />
          <Route path="/favorites" exact component={Favorites} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </AppLayout>
  );
};

export default App;
