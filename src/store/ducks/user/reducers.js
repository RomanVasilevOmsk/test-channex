import { createAction, createReducer } from '@reduxjs/toolkit';
import { AUTH_STATUSES } from '../../../constants/authStatuses';

import * as types from './types';

const setUser = createAction(types.SET_USER);

const initialState = { user: {} };

const userReducer = createReducer(initialState, builder => {
  builder.addCase(setUser, (state, action) => {
    return {
      ...state,
      user: { ...action.payload, authStatus: AUTH_STATUSES.AUTHOREZED },
    };
  });
});

export default userReducer;
