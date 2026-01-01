export default async function handler(req, res) {
  const { endpoint } = req.query;

  const API_KEY = process.env.GNEWS_API_KEY;

  if (!endpoint) {
    return res.status(400).json({ error: "Endpoint missing" });
  }

  try {
    const response = await fetch(
      `https://gnews.io/api/v4/${endpoint}&apikey=${API_KEY}`
    );

    const data = await response.json();
    res.status(200).json(data);

  } catch (error) {
    res.status(500).json({ error: "Failed to fetch news" });
  }
}
