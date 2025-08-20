import axios from "axios";

// ساخت نمونه اصلی axios
const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// api.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// // هندل کردن خطاهای پاسخ
// api.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     // نمایش خطا یا مدیریت خاص
//     console.error("Axios Error:", error.response?.data || error.message);
//     return Promise.reject(error);
//   }
// );

export default api;
