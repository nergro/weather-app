import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ProvidersInjector } from './ProvidersInjector';
import { CountriesStoreProvider } from './store/countriesStore/provider';
import { BrowserRouter as Router } from 'react-router-dom';

const storeProviders = [CountriesStoreProvider];

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
