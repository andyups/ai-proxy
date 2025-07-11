export default async function handler(req, res) {
  const { prompt, userKey } = req.body;

  // Ganti daftar key sesuai yang lo kasih ke temen lo nanti
  const validKeys = ['user-abc123', 'user-def456'];

  if (!validKeys.includes(userKey)) {
    return res.status(403).json({ error: '❌ Invalid key' });
  }

  const geminiRes = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=YOUR_GEMINI_API_KEY', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }]
    })
  });

  const data = await geminiRes.json();
  res.status(200).json(data);
}
