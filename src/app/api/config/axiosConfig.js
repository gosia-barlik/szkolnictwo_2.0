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
    console.error(error.message)
  }

  return Promise.reject(error)
}

const apiResponseHandler = (response) => {
  if (!response || (Array.isArray(response) && response.length === 0)) {
    console.error("API returned an empty response.");
    return Promise.reject(new Error("API returned an empty response."));
  }

  return response.data ?? response;
}

api.interceptors.response.use(
  (response) => apiResponseHandler(response),
  (error)=> errorHandler(error)
)