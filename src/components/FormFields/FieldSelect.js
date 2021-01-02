import React from 'react';
import PropTypes from 'prop-types';
import { Select } from 'antd';

import FormFieldInner from '../FormFieldInner';

const FieldSelect = ({ input, meta, label, options, isRequired, ...componentProps }) => {
  return (
    <FormFieldInner meta={meta} isRequired={isRequired} label={label}>
      <Select
        {...componentProps}
        options={options}
        value={input.value}
        onChange={input.onChange}
      />
    </FormFieldInner>
  );
};

FieldSelect.propTypes = {
  input: PropTypes.shape({
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
  }).isRequired,
  label: PropTypes.string,
  meta: PropTypes.shape({}).isRequired,
  isRequired: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.shape({})),
};

export default FieldSelect;
