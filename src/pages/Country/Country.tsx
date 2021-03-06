import React, { FC } from 'react';
import { useCountriesResource } from 'store/countriesStore/hooks';
import { isStoreError } from 'store/storeError';
import { isLoading } from 'store/types';
import { groupDataAlphabetically } from 'services/groupDataAlphabetically';
import { RouteComponentProps } from 'react-router-dom';
import { AlphabetizedList } from 'components/Molecules/AlphabetizedList/AlphabetizedList';
import { Spinner } from 'components/Atoms/Spinner/Spinner';
import { ErrorLayout } from 'components/layouts/ErrorLayout/ErrorLayout';

const Country: FC<RouteComponentProps<{ countryName: string }>> = ({ match }) => {
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

  const country = countries.find((x) => x.country === match.params.countryName);

  if (!country) {
    return <ErrorLayout message="We could not find this country" />;
  }

  const grouped = groupDataAlphabetically(country.cities);

  return <AlphabetizedList title={country.country} data={grouped} path="/weather" />;
};

export default Country;
