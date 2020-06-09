import createSagaMiddleware from 'redux-saga';
import { createStore, Store, applyMiddleware } from 'redux';
import sagas from './sagas';
import rootReducer, { AplicationStore } from './reducers';

const sagaMiddleware = createSagaMiddleware();

const store: Store<AplicationStore> = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(sagas);

export default store;
