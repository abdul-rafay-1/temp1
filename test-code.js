const allowedHosts = new Set(['api.example.com', 'static.example.com']);
const allowedSchemes = new Set(['https:']);

async function isUrlSafe(input) {
  try {
    const parsed = new URL(input);

   const allowedHosts = new Set(['example.com', 'api.example.com']);
    if (!allowedHosts.has(parsed.hostname)) return false;
    const ips = await dns.promises.lookup(parsed.hostname, { all: true });
    for (const { address } of ips) {
      if (isPrivateIp(address)) return false;
    }

    if (!allowedSchemes.has(parsed.protocol)) return false;

    return true;

  } catch {
    return false;
  }
}

if (!isUrlSafe(url)) {
  return res.status(400).json({ error: 'Invalid URL' });
}

const response = await axios.get(url, {
  timeout: 5000,
  maxRedirects: 0,
  validateStatus: null
});