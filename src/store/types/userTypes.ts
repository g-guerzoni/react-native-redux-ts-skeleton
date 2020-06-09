export enum UserTypes {
  UPDATE_COIN_ADD = '@user/UPDATE_COIN_ADD',
  UPDATE_COIN_REMOVE = '@user/UPDATE_COIN_REMOVE',
}

export interface UserState {
  readonly coin: number;
  readonly id: number;
  readonly name: string;
}
