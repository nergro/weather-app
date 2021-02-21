import { getCountries } from 'apiServices/countries/countries';
import React, { useEffect } from 'react';
import { newStoreError } from 'store/storeError';
import { Dispatch, Loading, Resource } from 'store/types';
import { Country } from 'types/Country';

import { Action, CountriesDispatchContext, CountriesStateContext, State } from './provider';

export const useState = (): State => {
  const state = React.useContext(CountriesStateContext);
  if (state === undefined) {
    throw new Error('Countries store is not initialized');
  }
  return state;
};

export const useDispatch = (): Dispatch<Action> => {
  const dispatch = React.useContext(CountriesDispatchContext);
  if (dispatch === undefined) {
    throw new Error('Countries store is not initialized');
  }
  return dispatch;
};

export const useCountriesResource = (): Resource<Country[]> => {
  const state = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!state) {
      dispatch({ type: 'Countries/LoadInitiated' });
      getCountries()
        .then((data) => dispatch({ type: 'Countries/Loaded', payload: data }))
        .catch((err) =>
          dispatch({
            type: 'Countries/LoadFailed',
            payload: newStoreError(err.message, err.response.status),
          })
        );
    }
  }, [state, dispatch]);

  return state || Loading;
};
