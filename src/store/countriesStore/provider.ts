import { StoreError } from 'store/storeError';
import { storeFactory } from 'store/storeFactory';
import { Action as GenericAction, ActionWithPayload, Resource } from 'store/types';
import { Country } from 'types/Country';

import { reducer } from './reducer';

export type Action =
  | GenericAction<'Countries/LoadInitiated'>
  | ActionWithPayload<'Countries/Loaded', Country[]>
  | ActionWithPayload<'Countries/LoadFailed', StoreError>;

export type State = Resource<Country[]> | null;

const initialState: State = null;

export const {
  dispatchContext: CountriesDispatchContext,
  stateContext: CountriesStateContext,
  provider: CountriesStoreProvider,
} = storeFactory(reducer, initialState);
