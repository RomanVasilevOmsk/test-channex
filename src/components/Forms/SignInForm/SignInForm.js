import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Field, Form } from 'react-final-form';
import { Button } from 'antd';
import { FieldTextInput, FieldPasswordInput } from 'components/FormFields';
import { required } from 'utils/validation';

const SignInForm = ({ onSubmit, className }) => {
  return (
    <Form
      onSubmit={onSubmit}
      className={className}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Field
            name="email"
            label="Email"
            component={FieldTextInput}
            validate={required}
          />

          <Field
            name="password"
            label="Password"
            component={FieldPasswordInput}
            validate={required}
          />

          <ButtonWrapper>
            <Button type="primary" htmlType="submit">
              Sign in
            </Button>
          </ButtonWrapper>
        </form>
      )}
    />
  );
};

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

SignInForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default SignInForm;
