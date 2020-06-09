import { all, takeLatest } from 'redux-saga/effects';

// import { UserTypes } from '../types/userTypes';
// import { todosRequestLoadSaga } from './userSaga';

export default function* rootSaga() {
  // return yield all([takeLatest(UserTypes.REQUEST_LOAD, todosRequestLoadSaga)]);
  return yield all([]);
}
