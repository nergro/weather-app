import { WeatherLocation } from 'components/Molecules/WeatherLocation/WeatherLocation';
import React, { FC } from 'react';
import { getWeatherIconUrl } from 'services/getWeatherIconUrl';
import { Weather } from 'types/Weather';

interface Props {
  data: Weather;
}

export const WeatherInfo: FC<Props> = ({ data }) => {
  const weatherIconData = data.weather[0];

  const weatherDetails = [
    { name: 'Feels like', value: Math.round(data.main.feels_like), units: '℃' },
    {
      name: 'Min / Max',
      value: `${Math.round(data.main.temp_min)} / ${Math.round(data.main.temp_max)}`,
      units: '℃',
    },
    { name: 'Air pressure', value: data.main.pressure, units: 'mbar' },
    { name: 'Humidity', value: data.main.humidity, units: '%' },
    { name: 'Average wind speed', value: data.wind.speed, units: 'm/s' },
  ];

  return (
    <div className="weatherInfoContainer">
      <WeatherLocation name={data.name} timezone={data.timezone} />
      <div className="weather">
        <div className="weather__imageContainer">
          <img src={getWeatherIconUrl(weatherIconData.icon)} alt={weatherIconData.description} />
          <p>
            {weatherIconData.description.charAt(0).toUpperCase() +
              weatherIconData.description.slice(1)}
          </p>
        </div>
        <div className="weather__temperature">
          <p>{Math.round(data.main.temp)} &#8451;</p>
        </div>
        <div className="weather__info">
          {weatherDetails.map((x) => (
            <p key={x.name} className="weather__info--row">
              <span>{x.name}:</span> {x.value} {x.units}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};
