import axios from 'axios';
import { Coordinates } from 'types/Coordinates';
import { Weather } from 'types/Weather';

const APP_ID = '7bb0d6bdf42e4414f90523ce62b83b5c';

const url = 'https://api.openweathermap.org/data/2.5/weather';

export const getWeatherDataByCity = async (city: string): Promise<Weather> => {
  const weather = await axios.get<Weather>(url, {
    params: {
      q: city,
      appid: APP_ID,
      units: 'metric',
    },
  });

  return weather.data;
};

export const getWeatherDataByCoordinates = async (coord: Coordinates): Promise<Weather> => {
  const weather = await axios.get<Weather>(url, {
    params: {
      lat: coord.lat,
      lon: coord.lon,
      appid: APP_ID,
      units: 'metric',
    },
  });

  return weather.data;
};
