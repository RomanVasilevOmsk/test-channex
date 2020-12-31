import * as api from './api';
import * as actions from './actions';
import StorageService from '../../../services/Storage';

export const fetchSignIn = payload => async dispatch => {
  return api
    .fetchSignIn(payload)
    .then(response => {
      const {
        data: {
          attributes: { token },
        },
      } = response;
      StorageService.setItem('accessToken', token);
      dispatch(actions.setUser());
    })
    .catch(error => {
      console.log('error', error);
    });
};
