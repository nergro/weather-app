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

export const Home: FC<RouteComponentProps> = ({ location }) => {
  const countries = useCountriesResource();
  const coordinates = useCurrentLocation();
  const { getWeatherByCity, getWeatherByCoordinates } = useWeatherResource();
  const [weatherData, setWeatherData] = useState<Resource<Weather>>();

  const passedCity = isHomeLocationState(location.state) ? location.state.item : undefined;

  useEffect(() => {
    if (passedCity) {
      setWeatherData(getWeatherByCity(passedCity));
    } else if (coordinates && coordinates !== 'error') {
      setWeatherData(getWeatherByCoordinates(coordinates));
    }
  }, [coordinates, getWeatherByCity, getWeatherByCoordinates, passedCity]);

  if (isLoading(countries) || isLoading(weatherData)) {
    return <div className="App">Loading...</div>;
  }

  if (isStoreError(countries) || isStoreError(weatherData) || !weatherData) {
    return <div className="App">Error...</div>;
  }

  return (
    <div className="homeContainer">
      <Search countries={countries} />
      <img src="http://openweathermap.org/img/wn/04d@4x.png" />
      <p>City: {weatherData.name}</p>
    </div>
  );
};
