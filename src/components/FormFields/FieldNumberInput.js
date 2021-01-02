import React from 'react';
import PropTypes from 'prop-types';
import { InputNumber } from 'antd';

import FormFieldInner from '../FormFieldInner';

const FieldNumberInput = ({ input, meta, label, isRequired, ...componentProps }) => {
  return (
    <FormFieldInner
      error={meta.touched && meta.error}
      isRequired={isRequired}
      label={label}
    >
      <InputNumber
        {...componentProps}
        value={input.value}
        onChange={input.onChange}
        type="number"
      />
    </FormFieldInner>
  );
};

FieldNumberInput.propTypes = {
  input: PropTypes.shape({
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
  }).isRequired,
  label: PropTypes.string,
  meta: PropTypes.shape({}).isRequired,
};

export default FieldNumberInput;
