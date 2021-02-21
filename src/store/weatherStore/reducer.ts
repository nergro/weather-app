import { Loading } from 'store/types';

import { Action, State } from './provider';

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'Weather/SingleLoadInitiated': {
      return { ...state, [action.payload.id]: Loading };
    }
    case 'Weather/SingleLoaded': {
      return { ...state, [action.payload.id]: action.payload.data };
    }
    case 'Weather/SingleLoadFailed': {
      return { ...state, [action.payload.id]: action.payload.error };
    }
    default: {
      return state;
    }
  }
};
