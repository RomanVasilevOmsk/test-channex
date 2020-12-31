import { fetch } from '../../../services/ApiService';

export const fetchSignIn = data =>
  fetch(
    'post',
    `sign_in`,
    {
      payload: data,
    },
    {},
  );
