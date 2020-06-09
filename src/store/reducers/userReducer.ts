import { Reducer } from 'redux';
import _ from 'lodash';
import { PayloadAction } from 'typesafe-actions';
import { UserTypes, UserState } from '../types/userTypes';

interface Dispatch {
  [key: string]: any;
}

interface DispatchParam {
  state: UserState;
  action?: PayloadAction<string, any>;
}

const INICIAL_STATE: UserState = {
  coin: 10,
  id: 1,
  name: 'Guilherme',
};

const dispatch: Dispatch = {
  [UserTypes.UPDATE_COIN_ADD]: ({ state, action }: DispatchParam) => ({
    ...state,
    coin: state.coin + action?.payload?.prize || 0,
  }),
  [UserTypes.UPDATE_COIN_REMOVE]: ({ state }: DispatchParam) => ({
    ...state,
    coin: state.coin > 0 ? state.coin - 1 : 0,
  }),
};

const User: Reducer = (state = INICIAL_STATE, action) => {
  return dispatch[action.type]
    ? dispatch[action.type]({ state, action })
    : INICIAL_STATE;
};

export default User;
