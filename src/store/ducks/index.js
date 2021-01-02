import { combineReducers } from 'redux';
import { userReducer } from './user';
import { bookingReducer } from './booking';

export const rootReducer = combineReducers({
  user: userReducer,
  booking: bookingReducer,
});
