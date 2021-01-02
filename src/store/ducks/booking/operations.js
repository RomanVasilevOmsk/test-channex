import * as api from './api';
import * as actions from './actions';

export const fetchBookingCreate = payload => async dispatch => {
  return api
    .fetchBookingCreate(payload)
    .then(response => {
      dispatch(actions.setBooking(response));
    })
    .catch(error => {
      console.log('error', error);
    });
};
