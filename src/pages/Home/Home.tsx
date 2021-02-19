import './Home.scss';

import React, { FC } from 'react';
import { useCountriesResource } from 'store/countriesStore/hooks';
import { isStoreError } from 'store/storeError';
import { isLoading } from 'store/types';
import { Search } from 'components/Organisms/Search/Search';

export const Home: FC = () => {
  const countries = useCountriesResource();

  if (isLoading(countries)) {
    return <div className="App">Loading...</div>;
  }

  if (isStoreError(countries)) {
    return <div className="App">Error...</div>;
  }

  return (
    <div className="homeContainer">
      <Search countries={countries} />
    </div>
  );
};
