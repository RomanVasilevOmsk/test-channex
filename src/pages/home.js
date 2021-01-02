import React, { useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Steps } from 'antd';
import {
  UserOutlined,
  SolutionOutlined,
  LoadingOutlined,
  CheckCircleOutlined,
} from '@ant-design/icons';

import { fetchSignIn, fetchRatePlans, fetchChannels } from 'store/ducks/user/operations';
import { fetchBookingCreate } from 'store/ducks/booking/operations';
import { getAuthStatus, getRatePlanes, getChannels } from 'store/ducks/user/selectors';

import SignInForm from 'components/Forms/SignInForm';
import BookingForm from 'components/Forms/BookingForm';

import { useOperation } from 'hooks';
import { AUTH_STATUSES } from 'constants/authStatuses';
import { initialValues as initialValuesBooking } from 'components/Forms/BookingForm/initValues';

const { Step } = Steps;

const Home = () => {
  const [onSignIn, isLoadingSignIn] = useOperation(fetchSignIn);
  const [onFetchRatePlans] = useOperation(fetchRatePlans);
  const [onFetchChannels] = useOperation(fetchChannels);
  const [onFetchBookingCreate, isLoadingBookingCreate] = useOperation(fetchBookingCreate);

  const authStatus = useSelector(getAuthStatus);
  const ratePlanes = useSelector(getRatePlanes);
  const channels = useSelector(getChannels);

  const handleSignIn = val => {
    return onSignIn({ user: val });
  };

  const getVerificationStatus = useCallback(() => {
    if (authStatus === AUTH_STATUSES.AUTHOREZED) {
      return { status: 'finish', icon: <CheckCircleOutlined /> };
    }
    if (isLoadingBookingCreate && authStatus === AUTH_STATUSES.UNATHORIZED) {
      return { status: 'process', icon: <LoadingOutlined /> };
    }
    return { status: 'wait', icon: <SolutionOutlined /> };
  }, []);

  const getLoginStatus = useCallback(() => {
    if (authStatus === AUTH_STATUSES.AUTHOREZED) {
      return { status: 'finish', icon: <CheckCircleOutlined /> };
    }
    if (isLoadingSignIn && authStatus === AUTH_STATUSES.UNATHORIZED) {
      return { status: 'process', icon: <LoadingOutlined /> };
    }
    return { status: 'wait', icon: <UserOutlined /> };
  }, [authStatus, isLoadingSignIn]);

  useEffect(() => {
    onFetchRatePlans();
    onFetchChannels();
    if (authStatus === AUTH_STATUSES.AUTHOREZED) {
      // onfetchRatePlans();
      // onfetchChannels();
    }
  }, [authStatus]);

  const verificationStatus = getVerificationStatus();
  const loginStatus = getLoginStatus();

  return (
    <Wrapper>
      <Steps style={{ marginBottom: 40 }}>
        <Step status={loginStatus.status} title="Login" icon={loginStatus.icon} />
        <Step
          status={verificationStatus.status}
          title="Verification"
          icon={verificationStatus.icon}
        />
      </Steps>
      <SignIn onSubmit={handleSignIn} />
      {/* {authStatus === AUTH_STATUSES.AUTHOREZED && ( */}
      <BookingForm
        onSubmit={onFetchBookingCreate}
        ratePlanes={ratePlanes}
        channels={channels}
        initialValues={initialValuesBooking}
      />
      {/* )} */}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
  padding: 40px 0;
  min-height: 100%;
`;

const SignIn = styled(SignInForm)`
  margin-bottom: 30px;
`;

export default Home;
