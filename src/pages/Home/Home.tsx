import React, { FC, useEffect, useState } from 'react';
import { useCountriesResource } from 'store/countriesStore/hooks';
import { isStoreError } from 'store/storeError';
import { isLoading, Resource } from 'store/types';
import { Search } from 'components/Organisms/Search/Search';
import { useWeatherResource } from 'store/weatherStore/hooks';
import { useCurrentLocation } from 'services/useCurrentLocation';
import { Weather } from 'types/Weather';
import { RouteComponentProps } from 'react-router-dom';
import { isHomeLocationState } from 'types/HomeLocationState';
import { WeatherInfo } from 'components/Organisms/WeatherInfo/WeatherInfo';

export const Home: FC<RouteComponentProps> = ({ location }) => {
  const [city, setCity] = useState<string>(
    isHomeLocationState(location.state) ? location.state.item : ''
  );

  const countries = useCountriesResource();
  const coordinates = useCurrentLocation();
  const { getWeatherByCity, getWeatherByCoordinates } = useWeatherResource();
  const [weatherData, setWeatherData] = useState<Resource<Weather>>();

  useEffect(() => {
    if (city) {
      setWeatherData(getWeatherByCity(city));
    } else if (coordinates && coordinates !== 'error') {
      setWeatherData(getWeatherByCoordinates(coordinates));
    }
  }, [coordinates, getWeatherByCity, getWeatherByCoordinates, city]);

  if (isLoading(countries) || isLoading(weatherData)) {
    return <div className="App">Loading...</div>;
  }

  if (isStoreError(countries) || isStoreError(weatherData) || !weatherData) {
    return <div className="App">Error...</div>;
  }

  return (
    <div className="homeContainer">
      <Search countries={countries} onChange={(city) => setCity(city)} />
      <WeatherInfo data={weatherData} />
    </div>
  );
};
