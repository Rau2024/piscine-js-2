import { readdir, readFile, writeFile } from 'fs';
import { promisify } from 'util';

const readdirAsync = promisify(readdir);
const readFileAsync = promisify(readFile);
const writeFileAsync = promisify(writeFile);

const directoryPath = process.argv[2];

if (!directoryPath) {
  console.log('Please provide a directory path as an argument');
  process.exit(1);
}

async function tellMeVip() {
  try {
    const files = await readdirAsync(directoryPath);

    const guestPromises = files.map(async (filename) => {
      const content = await readFileAsync(`${directoryPath}/${filename}`, 'utf8');
      const data = JSON.parse(content);

      if (data.answer === 'yes') {
        const nameWithoutExtension = filename.split('.')[0];
        const names = nameWithoutExtension.split('_');
        const firstname = names[0];
        const lastname = names[1];
        return `${lastname} ${firstname}`;
      }
      return null;
    });

    const allGuests = await Promise.all(guestPromises);
    const vipGuests = allGuests.filter(guest => guest !== null);

    vipGuests.sort();

    const output = vipGuests.map((guest, index) => `${index + 1}. ${guest}`).join('\n');

    await writeFileAsync('vip.txt', output, 'utf8');
    console.log('VIP list saved to vip.txt');

  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

tellMeVip();