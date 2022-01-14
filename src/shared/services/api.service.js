// Set up default config for http requests here
// Please have a look at here `https://github.com/axios/axios#request-config` for the full list of configs

// #region Package (third-party)
import axios from 'axios';
import queryString from 'query-string';
// #endregion

const ApiService = () => {
  const defaultContentType = 'application/json; charset=utf-8';

  const instance = axios.create({
    baseURL: process.env.REACT_APP_BACK_END_URL,
    headers: {
      'Content-Type': defaultContentType,
    },
    paramsSerializer: (params) => queryString.stringify(params),
  });

  // Add a response interceptor
  instance.interceptors.response.use(
    (res) => res,
    (err) => {
      if (err.response) {
        // Request made and server responded
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
      } else if (err.request) {
        // The request was made but no response was received
        console.log(err.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', err.message);
      }

      return Promise.reject(err);
    }
  );

  /**
   * Phương thức GET
   * @param {string} url Đường link API
   * @param {*} token
   * @returns Promise
   */
  const get = (url, token = null) => {
    if (token)
      instance.defaults.headers.common.Authorization = `${token.type} ${token.accessToken}`;

    return instance.get(url);
  };

  /**
   * Phương thức POST
   * @param {string} url Đường link API
   * @param {*} data Dữ liệu post
   * @param {*} token
   * @returns Promise
   */
  const post = (url, data, token = null) => {
    if (token)
      instance.defaults.headers.common.Authorization = `${token.type} ${token.accessToken}`;

    return instance.post(url, data);
  };

  /**
   * Phương thức PUT
   * @param {string} url Đường link API
   * @param {*} data Dữ liệu post
   * @param {*} token
   * @param {string} contentType
   * @returns Promise
   */
  const put = (url, data, { token = null, contentType = defaultContentType }) => {
    if (token)
      instance.defaults.headers.common.Authorization = `${token.type} ${token.accessToken}`;

    if (contentType !== defaultContentType)
      instance.defaults.headers.put['Content-Type'] = contentType;

    return instance.put(url, data);
  };

  /**
   * Phương thức DELETE
   * @param {string} url Đường link API
   * @param {*} params Dữ liệu delete
   * @param {*} token
   * @returns Promise
   */
  const remove = (url, params, token = null) => {
    if (token)
      instance.defaults.headers.common.Authorization = `${token.type} ${token.accessToken}`;

    if (params) return instance.delete(url, { params });

    return instance.delete(url);
  };

  /**
   * Khởi tạo mô hình phản hồi thành công API
   * @param {*} success Trạng thái của API
   * @param {*} msg Message phản hồi
   * @param {*} data Dữ liệu response
   * @returns Mô hình phản hồi thành công API
   */
  const successResponse = ({ success = true, msg = null, data = null, pagination = null }) => {
    let result = {};

    result.success = success;

    if (msg) result.message = msg;

    if (data) result.data = data;

    if (pagination) result.pagination = pagination;

    return result;
  };

  /**
   * Khởi tạo mô hình phản hồi lỗi API
   * @param {*} err
   * @param {*} errMsg Message lỗi mặc định
   * @returns Mô hình phản hồi lỗi API
   */
  const errorResponse = ({ err, errMsg = null }) => {
    let result = {};

    // Trường hợp thông tin phản hồi lỗi từ backend
    if (err.response) {
      const { success, message, errors } = err.response.data;

      result.success = success;
      result.message = message;

      if (errors) result.errors = errors;
    } else {
      result.success = false;
      result.message = err.message;
    }

    if (!result.message) {
      if (errMsg) result.message = errMsg;
      else result.message = 'Lỗi xảy ra khi thực thi API';
    }

    return result;
  };

  return {
    get,
    post,
    put,
    delete: remove,
    successResponse,
    errorResponse,
  };
};

export default ApiService;
