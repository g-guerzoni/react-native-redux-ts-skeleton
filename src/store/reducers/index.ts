import { combineReducers } from 'redux';

// INTERFACES
import { UserState } from '../types/userTypes';

// REDUCERS
import user from './userReducer';

export default combineReducers({ user });

export interface AplicationStore {
  user: UserState;
}
