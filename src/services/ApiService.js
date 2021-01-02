import Axios from 'axios';
import StorageService from './Storage';
// eslint-disable-next-line no-unused-vars
// let apiDispatch = () => {};

export const provideDispatchToApiService = dispatch => {
  return dispatch;
};

export const baseUrl = process.env.REACT_APP_API_URL;

export const apiUrl = `${baseUrl}/api/v1`;

export const axios = Axios.create();

export const fetch = (method, uri, options, headers) => {
  const instance = axios;
  const url = `${options?.host || apiUrl}/${uri}`;

  const response = instance({
    method,
    url,
    data: options?.payload,
    headers: headers || { Authorization: `Bearer ${StorageService.getAccessToken()}` },
  });

  return response.then(res => res.data);
};
