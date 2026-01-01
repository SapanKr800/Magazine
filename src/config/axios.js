import axios from "axios";

const api = axios.create({
baseURL: "/api/gnews?endpoint=",
  
});

export default api;
