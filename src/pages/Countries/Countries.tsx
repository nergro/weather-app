import React, { FC } from 'react';
import { useCountriesResource } from 'store/countriesStore/hooks';
import { isStoreError } from 'store/storeError';
import { isLoading } from 'store/types';

export const Countries: FC = () => {
  const countries = useCountriesResource();

  if (isLoading(countries)) {
    return <div className="App">Loading...</div>;
  }

  if (isStoreError(countries)) {
    return <div className="App">Error...</div>;
  }

  return <div>countries</div>;
};
