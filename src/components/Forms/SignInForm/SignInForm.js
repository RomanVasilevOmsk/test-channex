import React from 'react';
// import { Form, Field } from 'react-final-form';
import PropTypes from 'prop-types';
import { Form, Input, Button } from 'antd';
// import { required, email } from 'utils/validation';
// import { composeValidators } from 'utils';
// import styled, { css } from 'styled-components';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const SignInForm = ({ onSubmit }) => {
  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onSubmit}
      onFinishFailed={err => console.log(err)}
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

// const Title = styled.h3`
//   font-weight: 500;
//   font-size: 24px;
//   line-height: 148%;
//   margin-bottom: 20px;
//   text-align: center;
// `;

// const LinkElem = styled(Link)`
//   font-size: 12px;
//   line-height: 150%;
//   color: var(--darkGray);
//   &:hover {
//     color: var(--black);
//   }
// `;

// const Forgot = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin-bottom: 20px;
// `;

// const Btn = styled(UIButton)`
//   width: 100%;
// `;

SignInForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SignInForm;
