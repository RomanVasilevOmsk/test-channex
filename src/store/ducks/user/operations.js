import * as api from './api';
import * as actions from './actions';
import StorageService from '../../../services/Storage';

export const fetchSignIn = payload => async dispatch => {
  return api
    .fetchSignIn(payload)
    .then(response => {
      const { accessToken, user } = response;
      StorageService.setItem('accessToken', accessToken);
      dispatch(actions.setUser(user));
    })
    .catch(error => {
      console.log('error', error);
    });
};
