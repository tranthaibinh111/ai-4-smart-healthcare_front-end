// #region ANN Shop
// Services
import ApiService from './api.service';
// #endregion

const SubjectService = () => {
  // #region Parameter
  const url = '/subjects';
  const api = ApiService();
  // #endregion

  const getSubjects = async () => {
    let result;

    try {
      const { data } = await api.get(url);

      result = api.successResponse({ data: data });
    } catch (err) {
      const errMsg = 'Thất bại! Lấy danh sách đối tượng thực nghiệm';

      result = api.errorResponse({ err, errMsg });
    }

    return result;
  };

  const getSubject = async (slug) => {
    let result;

    try {
      const { data } = await api.get(`${url}/${slug}`);

      result = api.successResponse({ data: data });
    } catch (err) {
      const errMsg = 'Thất bại! Lấy thông tin đối tượng thực nghiệm';

      result = api.errorResponse({ err, errMsg });
    }

    return result;
  };

  const getEeg = async (slug) => {
    let result;

    try {
      const { data } = await api.get(`${url}/${slug}/eeg`);

      result = api.successResponse({ data: data });
    } catch (err) {
      const errMsg = 'Thất bại! Lấy thông tin tín hiệu EEG của đối tượng thực nghiệm';

      result = api.errorResponse({ err, errMsg });
    }

    return result;
  };

  return {
    getSubjects,
    getSubject,
    getEeg,
  };
};

export default SubjectService;
