import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from "redux-thunk";
import reducers from '../reducers';

const middleware = [thunk];

export default function configureStore() {
  return createStore(
    combineReducers({
      ...reducers
    }),
    {},
    compose(
      applyMiddleware(...middleware),
    )
  );
}