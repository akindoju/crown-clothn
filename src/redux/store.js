import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './root-reducer';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './root-saga';

const sagaMiddleware = createSagaMiddleware();

const middelewares = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
  middelewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middelewares));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
