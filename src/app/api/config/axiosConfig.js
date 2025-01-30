import axios from "axios";
import config from "../../../config";

export const api = axios.create({
  // withCredentials: true,
  baseURL: process.env.REACT_APP_BACKEND,
  headers: {
    'token': window.sessionStorage.getItem('TOKEN')
  }
});

const errorHandler = (error) => {
  const statusCode = error.response?.status

  if (statusCode && statusCode !== 401) {
    console.error(error)
  }

  return Promise.reject(error)
}

api.interceptors.response.use(res=>res, (error) => {
  return errorHandler(error)
})