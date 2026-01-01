import axios from "axios";

export default async function handler(req, res) {
  const { category = "business", q } = req.query;
  const API_KEY = process.env.VITE_API_KEY;

  try {
    let url = "";

    if (q) {
      // 🔍 Search
      url = `https://newsapi.org/v2/everything?q=${q}&language=en&apiKey=${API_KEY}`;
    } else {
      // 📰 Category news
      url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${API_KEY}`;
    }

    const response = await axios.get(url);

    res.status(200).json({
      articles: response.data.articles || [],
    });
  } catch (error) {
    console.error(error.response?.data || error.message);
    res.status(500).json({ articles: [] });
  }
}
