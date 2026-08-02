// axiosSetup.js
import axios from "axios";

axios.defaults.baseURL = "http://10.82.240.233:5000";
// axios.defaults.baseURL = "http://195.88.208.240:5000";

// Request interceptor
axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization =`Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Remove auth data
      localStorage.removeItem("token");

      // Optional: remove user info too
      localStorage.removeItem("user");

      // Redirect to login page
      window.location.href = "/";
    }

    return Promise.reject(error);
  }
);

export default axios;