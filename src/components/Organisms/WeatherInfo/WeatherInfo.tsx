import { CurrentDate } from 'components/Molecules/CurrentDate/CurrentDate';
import React, { FC } from 'react';
import { getWeatherIconUrl } from 'services/getWeatherIconUrl';
import { Weather } from 'types/Weather';

interface Props {
  data: Weather;
}

export const WeatherInfo: FC<Props> = ({ data }) => {
  const weatherIconData = data.weather[0];
  return (
    <div className="weatherInfoContainer">
      <div className="weatherlocation">
        <p className="weatherlocationName">{data.name}</p>
        <CurrentDate timezone={data.timezone} />
      </div>
      <div className="weather">
        <div className="weather__imageContainer">
          <img src={getWeatherIconUrl(weatherIconData.icon)} />
          <p>
            {weatherIconData.description.charAt(0).toUpperCase() +
              weatherIconData.description.slice(1)}
          </p>
        </div>
        <div className="weather__temperature">
          <p>{data.main.temp} &#8451;</p>
        </div>
        <div className="weather__info">
          <p className="weather__info--row">
            <span>Feels like:</span> {data.main.feels_like} &#8451;
          </p>
          <p className="weather__info--row">
            <span>Min / Max:</span> {Math.round(data.main.temp_min)} /{' '}
            {Math.round(data.main.temp_max)} &#8451;
          </p>
          <p className="weather__info--row">
            <span>Air pressure:</span> {data.main.pressure} mbar
          </p>
          <p className="weather__info--row">
            <span>Humidity:</span> {data.main.humidity} %
          </p>
          <p className="weather__info--row">
            <span>Wind speed:</span> {data.wind.speed} mps
          </p>
        </div>
      </div>
    </div>
  );
};
