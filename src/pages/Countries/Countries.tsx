import React, { FC } from 'react';
import { useCountriesResource } from 'store/countriesStore/hooks';
import { isStoreError } from 'store/storeError';
import { isLoading } from 'store/types';
import { groupDataAlphabetically } from 'services/groupDataAlphabetically';
import { DataGroup } from 'components/Molecules/DataGroup/DataGroup';
import { alphabet } from 'services/alphabet';

export const Countries: FC = () => {
  const countries = useCountriesResource();

  if (isLoading(countries)) {
    return <div className="App">Loading...</div>;
  }

  if (isStoreError(countries)) {
    return <div className="App">Error...</div>;
  }

  const grouped = groupDataAlphabetically(countries.map((x) => x.country));

  return (
    <div className="countriesContainer">
      <h1>Search by country</h1>
      <div className="countries">
        {alphabet.map((letter) => (
          <DataGroup key={letter} data={grouped[letter]} path="/countries" />
        ))}
      </div>
    </div>
  );
};
