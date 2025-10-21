import { readdir } from 'fs';
import { promisify } from 'util';

const readdirAsync = promisify(readdir);

const directoryPath = process.argv[2];

if (!directoryPath) {
  console.log('Please provide a directory path as an argument');
  process.exit(1);
}

async function tellMeWho() {
  try {
    const files = await readdirAsync(directoryPath);

    const guests = files.map((filename) => {
      const nameWithoutExtension = filename.split('.')[0];
      const names = nameWithoutExtension.split('_');
      const firstname = names[0];
      const lastname = names[1];
      return `${lastname} ${firstname}`;
    });

    guests.sort().forEach((guest, index) => {
      console.log(`${index + 1}. ${guest}`);
    });

  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

tellMeWho();