import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Field, Form } from 'react-final-form';
import { Button } from 'antd';
import { FieldTextInput, FieldPasswordInput } from 'components/FormFields';
import { required } from 'utils/validation';

const SignInForm = ({ onSubmit, className, isAuthorized }) => {
  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, submitting }) => (
        <Wrapper className={className} isAuthorized={isAuthorized}>
          <Field
            name="email"
            label="Email"
            component={FieldTextInput}
            validate={required}
            isRequired
          />

          <Field
            name="password"
            label="Password"
            component={FieldPasswordInput}
            validate={required}
            isRequired
          />

          <ButtonWrapper>
            <Button type="primary" onClick={handleSubmit} disabled={submitting}>
              Sign in
            </Button>
          </ButtonWrapper>
        </Wrapper>
      )}
    />
  );
};

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const Wrapper = styled.div`
  position: relative;
  ${({ isAuthorized }) =>
    isAuthorized &&
    `
    &:after {
      content: "";
      background: #ffffffa6;
      position: absolute;
      right: 0;
      left: 0;
      width: 100%;
      height: 100%;
      top: 0;
    }
  `}
`;

SignInForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isAuthorized: PropTypes.bool,
  className: PropTypes.string,
};

export default SignInForm;
