import { fetch } from 'services/ApiService';

export const fetchSignIn = data =>
  fetch(
    'post',
    `sign_in`,
    {
      payload: data,
    },
    {},
  );

export const fetchChannels = () => fetch('get', `channels`);

export const fetchRatePlans = () => fetch('get', 'rate_plans/options');
