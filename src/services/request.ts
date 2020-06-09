import axios, { Method } from 'axios';

interface Request {
  method?: Method;
  url?: string;
  urlParam?: string;
  data?: any;
}

const request = (params: Request) => {
  try {
    const response = axios({
      ...params,
      url:
        params.url || process.env.REACT_APP_API_URL + (params.urlParam || ''),
    });

    return response;
  } catch (error) {
    return {
      status: error?.response?.status || 500,
      data: error?.response?.data || error,
    };
  }
};

export default {
  get: (params: Request) => request({ method: 'GET', ...params }),
  post: (params: Request) => request({ method: 'POST', ...params }),
  put: (params: Request) => request({ method: 'PUT', ...params }),
  patch: (params: Request) => request({ method: 'PUT', ...params }),
  delete: (params: Request) => request({ method: 'DELETE', ...params }),
};
