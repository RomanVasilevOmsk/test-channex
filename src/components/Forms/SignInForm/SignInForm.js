import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Form, Input, Button } from 'antd';
const { Item } = Form;

const layout = {
  labelCol: { span: 10 },
  wrapperCol: { span: 14 },
};

const SignInForm = ({ onSubmit, className }) => {
  return (
    <Form {...layout} className={className} name="basic" onFinish={onSubmit}>
      <FormItem
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
        <Input />
      </FormItem>

      <FormItem
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </FormItem>

      <ButtonWrapper>
        <Button type="primary" htmlType="submit">
          Sign in
        </Button>
      </ButtonWrapper>
    </Form>
  );
};

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const FormItem = styled(Item)`
  & .ant-form-item-label {
    text-align: left;
  }
`;

SignInForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default SignInForm;
