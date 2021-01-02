import React from 'react';
import PropTypes from 'prop-types';

function FormError({ meta: { error, submitError } }) {
  const inputErrors = error || submitError;

  return (
    <>
      {Array.isArray(inputErrors) ? (
        inputErrors.map((item, index) => (
          <div
            className="ant-form-item-explain ant-form-item-explain-error"
            key={index.toString()}
          >
            <div role="alert" key={index.toString()}>
              {item}
            </div>
          </div>
        ))
      ) : (
        <div className="ant-form-item-explain ant-form-item-explain-error">
          <div role="alert">{inputErrors}</div>
        </div>
      )}
    </>
  );
}

FormError.propTypes = {
  meta: PropTypes.object,
};

export default FormError;
