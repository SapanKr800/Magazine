import axios from "axios";

export default async function handler(req, res) {
  const { category = "business", q } = req.query;

  try {
    const url = q
      ? `https://newsapi.org/v2/everything?q=${q}&apiKey=${process.env.VITE_API_KEY}`
      : `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${process.env.VITE_API_KEY}`;

    const response = await axios.get(url);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch news" });
  }
}
