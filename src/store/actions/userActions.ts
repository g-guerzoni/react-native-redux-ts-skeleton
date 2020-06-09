import { action } from 'typesafe-actions';
import * as Types from '../types/userTypes';

export const actionUserUpdateCoinAdd = (prize: number) =>
  action(Types.UserTypes.UPDATE_COIN_ADD, { prize });

export const actionUserUpdateCoinRemove = () =>
  action(Types.UserTypes.UPDATE_COIN_REMOVE);
