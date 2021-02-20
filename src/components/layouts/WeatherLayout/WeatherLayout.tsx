import { Search } from 'components/Organisms/Search/Search';
import { WeatherInfo } from 'components/Organisms/WeatherInfo/WeatherInfo';
import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { isStoreError } from 'store/storeError';
import { isLoading, Resource } from 'store/types';
import { Country } from 'types/Country';
import { Weather } from 'types/Weather';
import { Spinner } from 'components/Atoms/Spinner/Spinner';

interface Props {
  countries: Resource<Country[]>;
  weatherData: Resource<Weather> | undefined;
}

export const WeatherLayout: FC<Props> = ({ countries, weatherData }) => {
  const { push } = useHistory();

  if (isLoading(countries)) {
    return (
      <div className="App">
        <Spinner />
      </div>
    );
  }

  if (isStoreError(countries) || isStoreError(weatherData)) {
    return <div className="App">Error...</div>;
  }

  if (isLoading(weatherData)) {
    return (
      <div className="weatherLayout">
        <Search countries={countries} onChange={(option) => push(`/weather/${option}`)} />
        <Spinner />
      </div>
    );
  }

  return (
    <div className="weatherLayout">
      <Search countries={countries} onChange={(option) => push(`/weather/${option}`)} />
      {weatherData && <WeatherInfo data={weatherData} />}
    </div>
  );
};
