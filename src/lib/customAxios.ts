import axios, { AxiosInstance } from "axios";

const customAxios: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  withCredentials: true,
});

customAxios.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem("accessToken");
  config.headers.accessToken = accessToken;
  return config;
});

export default customAxios;
