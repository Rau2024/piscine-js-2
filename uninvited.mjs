import { createServer } from 'http';
import { writeFile } from 'fs';
import { promisify } from 'util';

const writeFileAsync = promisify(writeFile);
const PORT = 5000;

const server = createServer(async (req, res) => {
  res.setHeader('Content-Type', 'application/json');

  if (req.method !== 'POST') {
    res.writeHead(500);
    res.end(JSON.stringify({ error: 'server failed' }));
    return;
  }

  const guestName = req.url.slice(1);

  if (!guestName) {
    res.writeHead(500);
    res.end(JSON.stringify({ error: 'server failed' }));
    return;
  }

  let body = '';

  req.on('data', chunk => {
    body += chunk.toString();
  });

  req.on('end', async () => {
    try {
      let guestData;
      try {
        guestData = JSON.parse(body);
      } catch {
        guestData = body;
      }

      const filePath = `guests/${guestName}.json`;
      const fileContent = typeof guestData === 'string' ? guestData : JSON.stringify(guestData);

      await writeFileAsync(filePath, fileContent, 'utf8');

      res.writeHead(201);
      res.end(JSON.stringify(guestData));
    } catch (error) {
      res.writeHead(500);
      res.end(JSON.stringify({ error: 'server failed' }));
    }
  });
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});