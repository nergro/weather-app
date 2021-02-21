import React, { FC } from 'react';
import { useCountriesResource } from 'store/countriesStore/hooks';
import { isStoreError } from 'store/storeError';
import { isLoading } from 'store/types';
import { groupDataAlphabetically } from 'services/groupDataAlphabetically';
import { AlphabetizedList } from 'components/Molecules/AlphabetizedList/AlphabetizedList';
import { Spinner } from 'components/Atoms/Spinner/Spinner';
import { ErrorLayout } from 'components/layouts/ErrorLayout/ErrorLayout';

const Countries: FC = () => {
  const countries = useCountriesResource();

  if (isLoading(countries)) {
    return (
      <div className="App">
        <Spinner />
      </div>
    );
  }

  if (isStoreError(countries)) {
    return <ErrorLayout />;
  }

  const grouped = groupDataAlphabetically(countries.map((x) => x.country));

  return <AlphabetizedList title="Search by country" data={grouped} path="/countries" />;
};

export default Countries;
