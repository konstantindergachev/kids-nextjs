import { request } from '../config/axios';

const create = ({ port, endpoint, content, headers = {} }) => {
  return request({
    method: 'post',
    url: `http://localhost:${port}/${endpoint}`,
    data: content,
    headers,
  });
};

export const notifyService = { create };
