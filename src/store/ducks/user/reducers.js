import { createReducer } from '@reduxjs/toolkit';
import { AUTH_STATUSES } from 'constants/authStatuses';

import * as actions from './actions';

const initialState = { user: {}, ratePlans: {}, channels: {} };

const userReducer = createReducer(initialState, builder => {
  builder
    .addCase(actions.setUser, (state, action) => {
      return {
        ...state,
        user: { ...action.payload, authStatus: AUTH_STATUSES.AUTHOREZED },
      };
    })
    .addCase(actions.setRatePlanes, (state, action) => {
      return {
        ...state,
        ratePlans: action.payload,
      };
    })
    .addCase(actions.setChannels, (state, action) => {
      return {
        ...state,
        channels: action.payload,
      };
    });
});

export default userReducer;
