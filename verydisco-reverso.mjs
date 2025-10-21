import { readFileSync } from 'fs';

const filename = process.argv[2];

if (!filename) {
  console.log('Please provide a filename as an argument');
  process.exit(1);
}

function reverseWordDisco(word) {
  const mid = Math.ceil(word.length / 2);
  const firstHalf = word.slice(0, word.length - mid);
  const secondHalf = word.slice(word.length - mid);
  return secondHalf + firstHalf;
}

try {
  const content = readFileSync(filename, 'utf8');
  const result = content
    .split(' ')
    .map(reverseWordDisco)
    .join(' ');
  console.log(result);
} catch (error) {
  console.error('Error reading file:', error.message);
  process.exit(1);
}