import React, { FC } from 'react';
import { useCountriesResource } from 'store/countriesStore/hooks';
import { isStoreError } from 'store/storeError';
import { isLoading } from 'store/types';
import { groupDataAlphabetically } from 'services/groupDataAlphabetically';
import { RouteComponentProps } from 'react-router-dom';
import { AlphabetizedList } from 'components/Molecules/AlphabetizedList/AlphabetizedList';

export const Country: FC<RouteComponentProps<{ countryName: string }>> = ({ match }) => {
  const countries = useCountriesResource();

  if (isLoading(countries)) {
    return <div className="App">Loading...</div>;
  }

  if (isStoreError(countries)) {
    return <div className="App">Error...</div>;
  }

  const country = countries.find((x) => x.country === match.params.countryName);

  if (!country) {
    return <div className="App">Country not find</div>;
  }

  const grouped = groupDataAlphabetically(country.cities);

  return <AlphabetizedList title={country.country} data={grouped} path="/" exactPath />;
};
