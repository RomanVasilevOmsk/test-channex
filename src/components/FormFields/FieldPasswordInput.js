import React from 'react';
import PropTypes from 'prop-types';

import { Input } from 'antd';
import FormFieldInner from '../FormFieldInner';

const FieldPasswordInput = ({ input, meta, label, isRequired, ...componentProps }) => {
  return (
    <FormFieldInner
      error={meta.touched && meta.error}
      isRequired={isRequired}
      label={label}
    >
      <Input.Password {...componentProps} value={input.value} onChange={input.onChange} />
    </FormFieldInner>
  );
};

FieldPasswordInput.propTypes = {
  input: PropTypes.shape({
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
  }).isRequired,
  label: PropTypes.string,
  meta: PropTypes.shape({}).isRequired,
  isRequired: PropTypes.bool,
};

export default FieldPasswordInput;
