import { readdir } from 'fs';

const directoryPath = process.argv[2] || '.';

readdir(directoryPath, (error, entries) => {
  if (error) {
    console.error('Error reading directory:', error.message);
    process.exit(1);
  }
  console.log(entries.length);
});