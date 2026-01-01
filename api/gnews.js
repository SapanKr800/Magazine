export default async function handler(req, res) {
  const { endpoint = "top-headlines", ...query } = req.query;

  const params = new URLSearchParams({
    ...query,
    apikey: process.env.GNEWS_API_KEY,
  });

  try {
    const response = await fetch(
      `https://gnews.io/api/v4/${endpoint}?${params.toString()}`
    );
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch news" });
  }
}
