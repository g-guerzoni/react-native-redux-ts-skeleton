// import { call, put } from 'redux-saga/effects';
// import { getTodoListApi } from '../../services/todoService';
// import {
//   actionTodosRequestSuccess,
//   actionTodosRequestFailure,
// } from '../actions/userActions';

// export function* todosRequestLoadSaga() {
//   try {
//     const api = yield call(getTodoListApi);
//     if (api.status === 200) {
//       yield put(actionTodosRequestSuccess(api.data));
//     } else {
//       yield put(actionTodosRequestFailure());
//     }
//   } catch (error) {
//     console.error(error);
//     yield put(actionTodosRequestFailure());
//   }
// }
