import queryString from 'query-string';
import moment from 'moment';

export const callOperationAsync = async (
  operation: (...args) => dispatch => Promise,
  loaderToggler = () => {},
  loadHandler = () => {},
) => {
  let result;

  try {
    loaderToggler(true);
    loadHandler(true);
    result = await operation();
  } finally {
    loaderToggler(false);
    loadHandler(false);
  }

  return result;
};

export function paramsToQueryString(hash) {
  const params = queryString.stringify(hash, {
    arrayFormat: 'bracket',
  });

  return params ? `?${params}` : '';
}

export const getOptionsForSelect = arr =>
  arr?.map(item => ({
    label: item.attributes.title,
    value: item.id,
  }));

export const getDates = (startDate, endDate) => {
  let dateArray = [];
  let currentDate = moment(startDate);
  let stopDate = moment(endDate).subtract(1, 'day');
  while (currentDate <= stopDate) {
    dateArray.push(moment(currentDate).format('YYYY-MM-DD'));
    currentDate = moment(currentDate).add(1, 'days');
  }

  return dateArray.reduce((acc, val) => {
    return val ? { ...acc, [val]: '' } : acc;
  }, {});
};
