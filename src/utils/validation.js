const integerRegExp = /^[-+]?\d+$/gm;

export const isInteger = value => {
  return value && !integerRegExp.test(value) ? 'value is not integer' : undefined;
};

export const isIntegerObject = obj => {
  return !integerRegExp.test(Object.values(obj)[0]) ? 'value is not integer' : undefined;
};

export const required = value =>
  value || (typeof value === 'number' && !Number.isNaN(value)) ? undefined : 'Required';

export const composeValidators = (...validators) => (...args) =>
  validators.reduce((error, validator) => error || validator(...args), undefined);
