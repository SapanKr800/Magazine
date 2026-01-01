import axios from "axios";

const api = axios.create({
  baseURL: "/api", // 🔥 NOT gnews.io
});

export default api;
