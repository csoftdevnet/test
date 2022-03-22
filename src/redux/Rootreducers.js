import { combineReducers } from 'redux';

import authReducer from './auth/AuthReducer';

const RootReducers = combineReducers({
  authReducer,
});

export default RootReducers;
