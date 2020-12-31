import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../saga';

const sagaMiddleware = createSagaMiddleware();

const logger = createLogger({
    // ...options
});

const reducers = combineReducers({

});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reduxStore = createStore(
    reducers,
    composeEnhancers(applyMiddleware(logger, sagaMiddleware))
);
sagaMiddleware.run(rootSaga);

export default reduxStore;
  


