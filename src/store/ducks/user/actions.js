import * as types from './types';
import { createAction } from '@reduxjs/toolkit';

export const setUser = createAction(types.SET_USER);
export const setRatePlanes = createAction(types.SET_RATE_PLANS);

export const setChannels = createAction(types.SET_CHANNELS);
