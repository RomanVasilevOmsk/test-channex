import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';
import { Form } from 'antd';

import { layout } from 'constants/layoutFormStyle';
import FormError from '../FormError';
const { Item } = Form;

function FormFieldInner({ error, label, children, isRequired }) {
  return (
    <FormItem
      {...layout}
      label={label}
      className={classNames('ant-row ant-form-item', {
        'ant-form-item-with-help ant-form-item-has-error': error,
      })}
      required={isRequired}
    >
      {children}
      {error && typeof error == 'string' && <FormError error={error} />}
    </FormItem>
  );
}

const FormItem = styled(Item)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  & .ant-form-item-label {
    text-align: left;
  }

  & .ant-picker-range {
    width: 100%;
  }

  & .ant-input-number {
    width: 100%;
  }
`;

FormFieldInner.propTypes = {
  label: PropTypes.string,
  isRequired: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  meta: PropTypes.object,
};

export default FormFieldInner;
