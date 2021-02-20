import { Search } from 'components/Organisms/Search/Search';
import { WeatherInfo } from 'components/Organisms/WeatherInfo/WeatherInfo';
import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { isStoreError } from 'store/storeError';
import { isLoading, Resource } from 'store/types';
import { Country } from 'types/Country';
import { Weather } from 'types/Weather';

interface Props {
  countries: Resource<Country[]>;
  weatherData: Resource<Weather> | undefined;
}

export const WeatherLayout: FC<Props> = ({ countries, weatherData }) => {
  const { push } = useHistory();

  if (isLoading(countries) || isLoading(weatherData)) {
    return <div className="App">Loading...</div>;
  }

  if (isStoreError(countries) || isStoreError(weatherData) || !weatherData) {
    return <div className="App">Error...</div>;
  }

  return (
    <div className="weatherLayout">
      <Search countries={countries} onChange={(option) => push(`/weather/${option}`)} />
      <WeatherInfo data={weatherData} />
    </div>
  );
};
