export const initialValues = {
  status: 'commit',
  reservation_id: null,
  currency: 'GBP',
  arrival_hour: '10:00',
  rooms: [
    {
      occupancy: {
        adults: 1,
        children: 0,
        infants: 0,
      },
      rate_plan_id: '',
      days: {},
    },
  ],
};
