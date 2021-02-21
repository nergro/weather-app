import { Search } from 'components/Organisms/Search/Search';
import { WeatherInfo } from 'components/Organisms/WeatherInfo/WeatherInfo';
import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { isStoreError } from 'store/storeError';
import { isLoading, Resource } from 'store/types';
import { Country } from 'types/Country';
import { Weather } from 'types/Weather';
import { Spinner } from 'components/Atoms/Spinner/Spinner';
import { WeatherMap } from 'components/Organisms/WeatherMap/WeatherMap';
import { Coordinates } from 'types/Coordinates';
import { ErrorLayout } from '../ErrorLayout/ErrorLayout';
interface Props {
  countries: Resource<Country[]>;
  weatherData: Resource<Weather> | undefined;
  currentLocation?: Coordinates;
}

export const WeatherLayout: FC<Props> = ({ countries, weatherData, currentLocation }) => {
  const { push } = useHistory();

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

  if (isStoreError(weatherData)) {
    return <ErrorLayout message={weatherData.code === 404 ? 'We could not find this city' : ''} />;
  }

  if (isLoading(weatherData)) {
    return (
      <div className="weatherLayout">
        <Search countries={countries} onChange={(option) => push(`/weather/${option}`)} />
        <Spinner />
      </div>
    );
  }

  const weatherCoords: Coordinates | undefined = weatherData ? { ...weatherData.coord } : undefined;

  const coordinates: Coordinates | undefined = currentLocation || weatherCoords;

  return (
    <div className="weatherLayout">
      <Search countries={countries} onChange={(option) => push(`/weather/${option}`)} />
      {weatherData && <WeatherInfo data={weatherData} />}
      {coordinates && <WeatherMap coordinates={coordinates} />}
    </div>
  );
};
