import React from 'react';
import PropTypes from 'prop-types';

import { Input } from 'antd';
import FormFieldInner from '../FormFieldInner';

const FieldTextInput = ({ input, meta, label, isRequired, ...componentProps }) => {
  return (
    <FormFieldInner meta={meta} isRequired={isRequired} label={label}>
      <Input {...componentProps} value={input.value} onChange={input.onChange} />
    </FormFieldInner>
  );
};

FieldTextInput.propTypes = {
  input: PropTypes.shape({
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
  }).isRequired,
  label: PropTypes.string,
  meta: PropTypes.shape({}).isRequired,
  isRequired: PropTypes.bool,
};

export default FieldTextInput;
