import { WeatherLayout } from 'components/layouts/WeatherLayout/WeatherLayout';
import React, { FC } from 'react';
import { Redirect, RouteComponentProps } from 'react-router-dom';
import { useCountriesResource } from 'store/countriesStore/hooks';
import { useWeatherByCityResource } from 'store/weatherStore/hooks';

const CityWeather: FC<RouteComponentProps<{ cityName: string }>> = ({ match }) => {
  const cityName = match.params.cityName;

  const countries = useCountriesResource();
  const weatherData = useWeatherByCityResource(cityName);

  if (!cityName) {
    return <Redirect to="/" />;
  }

  return <WeatherLayout countries={countries} weatherData={weatherData} />;
};

export default CityWeather;
