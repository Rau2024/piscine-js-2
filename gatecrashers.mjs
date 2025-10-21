import { createServer } from 'http';
import { writeFile } from 'fs/promises';
import { URL } from 'url';

const PORT = 5000;

const AUTHORIZED_USERS = ['Caleb_Squires', 'Tyrique_Dalton', 'Rahima_Young'];
const PASSWORD = 'abracadabra';


const parseBasicAuth = (authHeader) => {
  if (!authHeader || !authHeader.startsWith('Basic ')) {
    return null;
  }

  try {
    const base64Credentials = authHeader.slice(6);
    const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
    const [username, password] = credentials.split(':');
    return { username, password };
  } catch (error) {
    return null;
  }
};


const isAuthorized = (username, password) => {
  return AUTHORIZED_USERS.includes(username) && password === PASSWORD;
};

const server = createServer(async (req, res) => {

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');


  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }


  if (req.method !== 'POST') {
    res.writeHead(405, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }


  const authHeader = req.headers.authorization;
  const credentials = parseBasicAuth(authHeader);

  if (!credentials || !isAuthorized(credentials.username, credentials.password)) {
    res.writeHead(401, { 'Content-Type': 'application/json' });
    res.end('Authorization Required');
    return;
  }

  try {

    const parsedUrl = new URL(req.url, `http://localhost:${PORT}`);
    const guestName = parsedUrl.pathname.slice(1);

    if (!guestName) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Guest name required in URL path' }));
      return;
    }


    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', async () => {
      try {
        let guestData;
        let fileContent;
        let responseContent;


        let actualBody = body;
        if (!actualBody && req.headers.body) {
          actualBody = req.headers.body;
        }


        try {
          guestData = JSON.parse(actualBody);

          fileContent = JSON.stringify(guestData, null, 2);
          responseContent = JSON.stringify(guestData);
        } catch (jsonError) {

          guestData = actualBody;
          fileContent = actualBody;
          responseContent = JSON.stringify(actualBody);
        }


        const filename = `guests/${guestName}.json`;


        await writeFile(filename, fileContent);


        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(responseContent);
      } catch (error) {

        console.error('Error processing request:', error);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'server failed' }));
      }
    });
  } catch (error) {

    console.error('Server error:', error);
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'server failed' }));
  }
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

// Handle server errors
server.on('error', (error) => {
  console.error('Server failed to start:', error);
});