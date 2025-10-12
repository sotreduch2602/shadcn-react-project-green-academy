import axios from "axios";
import { BASE_URL, BASE_URL_LOCAL } from "./baseURL";

const axiosInstance = axios.create({
  baseURL: BASE_URL_LOCAL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default axiosInstance;
