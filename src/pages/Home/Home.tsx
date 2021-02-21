import React, { FC, useEffect, useState } from 'react';
import { useCountriesResource } from 'store/countriesStore/hooks';
import { Resource } from 'store/types';
import { useWeatherResource } from 'store/weatherStore/hooks';
import { useCurrentLocation } from 'services/useCurrentLocation';
import { Weather } from 'types/Weather';
import { WeatherLayout } from 'components/layouts/WeatherLayout/WeatherLayout';

const Home: FC = () => {
  const countries = useCountriesResource();
  const coordinates = useCurrentLocation();
  const { getWeatherByCoordinates } = useWeatherResource();
  const [weatherData, setWeatherData] = useState<Resource<Weather>>();

  useEffect(() => {
    if (coordinates) {
      setWeatherData(getWeatherByCoordinates(coordinates));
    }
  }, [coordinates, getWeatherByCoordinates]);

  return (
    <WeatherLayout countries={countries} weatherData={weatherData} currentLocation={coordinates} />
  );
};

export default Home;
