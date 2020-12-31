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
