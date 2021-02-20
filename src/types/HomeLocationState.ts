import { LocationState } from 'history';

export interface HomeLocationState {
  item: string;
}

export const isHomeLocationState = (state: LocationState): state is HomeLocationState => {
  return state !== null && state !== undefined && (state as HomeLocationState).item !== undefined;
};
