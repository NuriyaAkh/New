//API_key="78da98d90d0a4ac29291a693bcb7b83e"
class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }
}
const BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:4000';
export default new Api({
  baseUrl: BASE_URL,
  headers: {
    authorization: `Bearer ${localStorage.getItem('jwt')}`,
    'Content-Type': 'application/json',
  },
});
