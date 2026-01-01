import axios from "axios";

export default async function handler(req, res) {
  const { category = "general", q } = req.query;
  const API_KEY = process.env.VITE_API_KEY;

  try {
    let url = "";

    if (q) {
      url = `https://gnews.io/api/v4/search?q=${q}&lang=en&country=in&token=${API_KEY}`;
    } else {
      url = `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&country=in&token=${API_KEY}`;
    }

    const response = await axios.get(url);

    res.status(200).json({
      articles: response.data.articles || [],
    });
  } catch (err) {
    console.error(err.response?.data || err.message);
    res.status(500).json({ articles: [] });
  }
}
