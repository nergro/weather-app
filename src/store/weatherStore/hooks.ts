import { getWeatherDataByCity, getWeatherDataByCoordinates } from 'apiServices/weather/weather';
import React, { useCallback } from 'react';
import { newStoreError } from 'store/storeError';
import { Dispatch, Loading, Resource } from 'store/types';
import { Coordinates } from 'types/Coordinates';
import { Weather } from 'types/Weather';

import { Action, WeatherDispatchContext, WeatherStateContext, State } from './provider';

export const useState = (): State => {
  const state = React.useContext(WeatherStateContext);
  if (state === undefined) {
    throw new Error('Weather store is not initialized');
  }
  return state;
};

export const useDispatch = (): Dispatch<Action> => {
  const dispatch = React.useContext(WeatherDispatchContext);
  if (dispatch === undefined) {
    throw new Error('Weather store is not initialized');
  }
  return dispatch;
};

interface WeatherResource {
  getWeatherByCity: (city: string) => Resource<Weather>;
  getWeatherByCoordinates: (coord: Coordinates) => Resource<Weather>;
}

export const useWeatherResource = (): WeatherResource => {
  const state = useState();
  const dispatch = useDispatch();

  const getWeatherByCity = useCallback(
    (city: string) => {
      if (!state[city]) {
        dispatch({ type: 'Weather/SingleLoadInitiated', payload: { id: city } });
        getWeatherDataByCity(city)
          .then((data) => dispatch({ type: 'Weather/SingleLoaded', payload: { id: city, data } }))
          .catch((err) => {
            dispatch({
              type: 'Weather/SingleLoadFailed',
              payload: { id: city, error: newStoreError(err.message, err.code) },
            });
          });
      }
      return state[city] || Loading;
    },
    [state, dispatch]
  );

  const getWeatherByCoordinates = useCallback(
    (coord: Coordinates) => {
      const locationId = `${coord.lat}${coord.lon}`;

      if (!state[locationId]) {
        dispatch({ type: 'Weather/SingleLoadInitiated', payload: { id: locationId } });
        getWeatherDataByCoordinates(coord)
          .then((data) =>
            dispatch({ type: 'Weather/SingleLoaded', payload: { id: locationId, data } })
          )
          .catch((err) => {
            dispatch({
              type: 'Weather/SingleLoadFailed',
              payload: { id: locationId, error: newStoreError(err.message, err.code) },
            });
          });
      }
      return state[locationId] || Loading;
    },
    [state, dispatch]
  );

  return { getWeatherByCity, getWeatherByCoordinates };
};
