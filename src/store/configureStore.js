import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import jobsReducer from '../reducers/jobs';
import filtersReducer from '../reducers/filters';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      auth: authReducer,
      jobs: jobsReducer,
      filters: filtersReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
