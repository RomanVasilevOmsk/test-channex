/* eslint-disable import/no-anonymous-default-export */
import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { callOperationAsync } from '../utils';

export default operation => {
  const [isExecuting, setIsExecuting] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const execute = useCallback(
    args =>
      callOperationAsync(() => dispatch(operation(args)), setIsExecuting, setIsLoading),
    [],
  );

  return [execute, isExecuting, isLoading];
};
