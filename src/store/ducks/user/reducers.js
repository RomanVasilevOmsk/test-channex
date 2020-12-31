import { createAction, createReducer } from '@reduxjs/toolkit';

import * as types from './types';

const setUser = createAction(types.SET_USER);

const initialState = { user: {} };

const userReducer = createReducer(initialState, builder => {
  builder.addCase(setUser, (state, action) => {
    state.push({ ...state, user: action.payload });
  });
});

export default userReducer;
