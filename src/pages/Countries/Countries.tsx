import React, { FC } from 'react';
import { useCountriesResource } from 'store/countriesStore/hooks';
import { isStoreError } from 'store/storeError';
import { isLoading } from 'store/types';
import { groupDataAlphabetically } from 'services/groupDataAlphabetically';
import { AlphabetizedList } from 'components/Molecules/AlphabetizedList/AlphabetizedList';

export const Countries: FC = () => {
  const countries = useCountriesResource();

  if (isLoading(countries)) {
    return <div className="App">Loading...</div>;
  }

  if (isStoreError(countries)) {
    return <div className="App">Error...</div>;
  }

  const grouped = groupDataAlphabetically(countries.map((x) => x.country));

  return <AlphabetizedList title="Search by country" data={grouped} path="/countries" />;
};
