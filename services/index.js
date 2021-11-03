import { request } from '../config/axios';

const create = ({ port, endpoint, content }) => {
  return request({
    method: 'post',
    url: `http://localhost:${port}/${endpoint}`,
    data: content,
  });
};

export const notifyService = { create };
