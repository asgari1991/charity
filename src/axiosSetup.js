// axiosSetup.js
import axios from "axios";

axios.defaults.baseURL = "http://10.82.240.242:5000"; // or your base URL
// axios.defaults.baseURL = "http://195.88.208.6:5000"; // or your base URL

// Attach token to every request
axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

export default axios;
