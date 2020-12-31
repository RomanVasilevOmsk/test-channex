import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useOperation } from '../hooks';
import { fetchSignIn } from '../store/ducks/user/operations';
import { AUTH_STATUSES } from '../constants/authStatuses';
import { selectAuthStatus } from '../store/ducks/user/selectors';

import SignInForm from '../components/Forms/SignInForm';
import BookingForm from '../components/Forms/BookingForm';

const Home = () => {
  const [onSignIn] = useOperation(fetchSignIn);
  const authStatus = useSelector(selectAuthStatus);

  const handleSignIn = val => {
    return onSignIn({ user: val });
  };

  useEffect(() => {
    if (authStatus === AUTH_STATUSES.AUTHOREZED) {
      // getAdditionalInfo(undefined);
      console.log('true');
    }
  }, [authStatus]);

  console.log('authStatus', authStatus);

  return (
    <div>
      <SignInForm onSubmit={handleSignIn} />
      {authStatus === AUTH_STATUSES.AUTHOREZED && (
        <BookingForm onSubmit={values => console.log('values', values)} />
      )}
    </div>
  );
};

export default Home;
