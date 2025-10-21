import { createServer } from 'http';
import { readFile } from 'fs';
import { promisify } from 'util';

const readFileAsync = promisify(readFile);
const PORT = 5000;

const server = createServer(async (req, res) => {
  res.setHeader('Content-Type', 'application/json');

  if (req.method !== 'GET') {
    res.writeHead(404);
    res.end(JSON.stringify({ error: 'guest not found' }));
    return;
  }

  const guestName = req.url.slice(1);

  if (!guestName) {
    res.writeHead(404);
    res.end(JSON.stringify({ error: 'guest not found' }));
    return;
  }

  try {
    const filePath = `guests/${guestName}.json`;
    const fileContent = await readFileAsync(filePath, 'utf8');
    const guestData = JSON.parse(fileContent);

    res.writeHead(200);
    res.end(JSON.stringify(guestData));
  } catch (error) {
    if (error.code === 'ENOENT') {
      res.writeHead(404);
      res.end(JSON.stringify({ error: 'guest not found' }));
    } else {
      res.writeHead(500);
      res.end(JSON.stringify({ error: 'server failed' }));
    }
  }
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});