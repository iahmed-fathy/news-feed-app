export default async function handler(req, res) {
  const { query = "", category = "general", page = 1 } = req.query;

  const apiKey = process.env.VITE_NEWS_FEED_API_KEY;
  const url = `https://newsapi.org/v2/top-headlines?q=${query}&category=${category}&page=${page}&pageSize=5&country=us&apiKey=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch news" });
  }
}
