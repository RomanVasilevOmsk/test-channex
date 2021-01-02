import { fetch } from 'services/ApiService';

export const fetchBookingCreate = data =>
  fetch('post', `/bookings/push`, {
    payload: { booking: data },
  });
