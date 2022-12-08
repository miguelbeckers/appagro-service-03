import axios from "axios";

const http =  axios.create({
    baseURL: "http://localhost:8080",
    timeout: 50000
});

http.interceptors.request.use(
  config => {
    const token = JSON.parse(localStorage.getItem('token'));
    if (token) {
      config.headers = {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      };
    } else {
      config.headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      };
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default http;