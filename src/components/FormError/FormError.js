import React from 'react';
import PropTypes from 'prop-types';

function FormError({ error }) {
  return (
    <div className="ant-form-item-explain ant-form-item-explain-error">
      <div role="alert">{error}</div>
    </div>
  );
}

FormError.propTypes = {
  meta: PropTypes.object,
};

export default FormError;
