import axios from "axios";

const api = axios.create({
  baseURL: "https://gnews.io/api/v4/",
  params: {
    apikey: import.meta.env.VITE_GNEWS_API_KEY,
  },
});

export default api;
