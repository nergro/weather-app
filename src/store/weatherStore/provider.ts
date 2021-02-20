import { StoreError } from 'store/storeError';
import { storeFactory } from 'store/storeFactory';
import { ActionWithPayload, Resource } from 'store/types';
import { Weather } from 'types/Weather';

import { reducer } from './reducer';

export type Action =
  | ActionWithPayload<'Weather/SingleLoadInitiated', { id: string }>
  | ActionWithPayload<'Weather/SingleLoaded', { id: string; data: Weather }>
  | ActionWithPayload<'Weather/SingleLoadFailed', { id: string; error: StoreError }>;

export type State = {
  [id: string]: Resource<Weather> | undefined;
};

const initialState: State = {};

export const {
  dispatchContext: WeatherDispatchContext,
  stateContext: WeatherStateContext,
  provider: WeatherStoreProvider,
} = storeFactory(reducer, initialState);
