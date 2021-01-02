const integerRegExp = /^\d+$/;

export const isInteger = value =>
  value && !integerRegExp.test(value) ? 'number is not integer' : undefined;

export const required = value =>
  value || (typeof value === 'number' && !Number.isNaN(value)) ? undefined : 'Required';
