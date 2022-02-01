import { request } from '../config/axios';

const create = ({ endpoint, content, headers = {} }) => {
  return request({
    method: 'post',
    url: `${endpoint}`,
    data: content,
    headers,
  });
};

export const notifyService = { create };
