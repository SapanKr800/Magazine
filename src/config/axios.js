import axios from "axios";

const api = axios.create({
  baseURL: "/api", // 🔥 proxy base
});

export default api;
