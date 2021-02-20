import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { ProvidersInjector } from './ProvidersInjector';
import { CountriesStoreProvider } from './store/countriesStore/provider';
import { WeatherStoreProvider } from './store/weatherStore/provider';

const storeProviders = [CountriesStoreProvider, WeatherStoreProvider];

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ProvidersInjector providers={storeProviders}>
        <App />
      </ProvidersInjector>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
