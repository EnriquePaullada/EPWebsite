export default async function handler(req, res) {
    // Only allow POST requests
    console.log("--- NEW SUBMISSION ---");
    console.log("Body Type:", typeof req.body);
    console.log("Content:", JSON.stringify(req.body, null, 2));
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method not allowed' });
    }
  
    const WEBHOOK_URL = process.env.N8N_WEBHOOK_URL;
  
    try {
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(req.body),
      });
  
      if (response.ok) {
        return res.status(200).json({ message: 'Success' });
      } else {
        return res.status(500).json({ error: 'Failed to notify backend' });
      }
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }