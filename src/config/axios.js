import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000',
});

instance.interceptors.request.use(
  (axiosConfig) => {
    const token = localStorage.getItem('jwtToken');
    if (token) {
      // Apply authorization token to every request if logged in
      axiosConfig.headers.common["Authorization"] = token;
    }
    return axiosConfig;
  },
  // 对请求错误做些什么
  error => Promise.reject(error),
);



export default instance;