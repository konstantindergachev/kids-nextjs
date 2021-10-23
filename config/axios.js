import axios from 'axios';
import { api } from '@/constants';

const client = axios.create({
  baseURL: api.url,
});

export const request = (options) => {
  const onSuccess = (response) => {
    return response.data;
  };

  const onError = (error) => {
    const response = {};
    if (error.response) {
      response.status = error.response.status;
      response.data = error.response.data;
      response.headers = error.response.headers;
    } else {
      response.message = error.message;
    }

    return Promise.reject(response);
  };

  return client(options).then(onSuccess).catch(onError);
};
