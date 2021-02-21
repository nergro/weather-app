import { Loading } from 'store/types';

import { Action, State } from './provider';

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'Countries/LoadInitiated': {
      return Loading;
    }
    case 'Countries/Loaded': {
      return action.payload;
    }
    case 'Countries/LoadFailed': {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};
