import { createReducer } from '@reduxjs/toolkit';

import * as actions from './actions';

const initialState = { booking: {} };

const bookingReducer = createReducer(initialState, builder => {
  builder.addCase(actions.setBooking, (state, action) => {
    return {
      ...state,
      booking: action.payload,
    };
  });
});

export default bookingReducer;
