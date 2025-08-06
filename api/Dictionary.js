export default async function handler(req, res) {
  const url = "https://raw.githubusercontent.com/scriptin/jmdict-simplified/master/jmdict-eng-3.5.0.json";
  try {
    const response = await fetch(url);
    const data = await response.json();
    res.setHeader('Access-Control-Allow-Origin', '*'); // allow Rork to fetch
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to load dictionary" });
  }
}
