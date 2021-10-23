import { request } from '../config/axios';

const create = ({ endpoint, content }) => {
  return request({
    method: 'post',
    url: `http://localhost:5000/${endpoint}`,
    data: content,
  });
};

export const notifyService = { create };
