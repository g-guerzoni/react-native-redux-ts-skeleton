import request from './request';

export const getTodoListApi = async () => {
  const response = await request.get({
    urlParam: 'todos/1',
  });
  return response;
};
