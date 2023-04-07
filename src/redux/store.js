import {
  combineReducers,
  applyMiddleware,
  legacy_createStore as createStore,
} from 'redux';

import thunk from 'redux-thunk';
import appReducer from './reducers/app-reducer';

const reducer = combineReducers({
  app: appReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

window.store = store;
export default store;
