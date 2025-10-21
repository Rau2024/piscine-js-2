import { readFile, writeFile } from 'fs';
import { promisify } from 'util';

const readFileAsync = promisify(readFile);
const writeFileAsync = promisify(writeFile);

const inputFile = process.argv[2];
const operation = process.argv[3];
const customFileName = process.argv[4];

if (!inputFile || !operation) {
  console.log('Usage: node tell-it-cypher.mjs <file> <encode|decode> [output-filename]');
  process.exit(1);
}

if (operation !== 'encode' && operation !== 'decode') {
  console.log('Second argument must be either "encode" or "decode"');
  process.exit(1);
}

async function tellItCypher() {
  try {
    if (operation === 'encode') {
      const content = await readFileAsync(inputFile, 'utf8');
      const encoded = Buffer.from(content, 'utf8').toString('base64');
      const outputFile = customFileName || 'cypher.txt';
      await writeFileAsync(outputFile, encoded, 'utf8');
      console.log(`File encoded and saved as ${outputFile}`);
    } else if (operation === 'decode') {
      const content = await readFileAsync(inputFile, 'utf8');
      const decoded = Buffer.from(content, 'base64').toString('utf8');
      const outputFile = customFileName || 'clear.txt';
      await writeFileAsync(outputFile, decoded, 'utf8');
      console.log(`File decoded and saved as ${outputFile}`);
    }
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

tellItCypher();