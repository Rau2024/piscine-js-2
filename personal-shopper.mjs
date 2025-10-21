import { readFileSync, writeFileSync, unlinkSync, existsSync } from 'fs';

const args = process.argv.slice(2);
const filename = args[0];
const command = args[1];
const item = args[2];
const quantity = args[3];

function readShoppingList(filename) {
  try {
    const data = readFileSync(filename, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return {};
  }
}

function writeShoppingList(filename, list) {
  writeFileSync(filename, JSON.stringify(list));
}

function printHelp() {
  console.log('Commands:');
  console.log('- create: takes a filename as argument and create it (should have .json extension specified)');
  console.log('- delete: takes a filename as argument and delete it');
  console.log('- add: add a new element to the list in the file');
  console.log('- rm: remove an element from the list in the file');
  console.log('- ls: print the list in the console');
  console.log('- help: print all the command lines available');
}

function printList(list) {
  const keys = Object.keys(list);
  if (keys.length === 0) {
    console.log('Empty list.');
    return;
  }
  keys.forEach(key => {
    console.log(`- ${key} (${list[key]})`);
  });
}

if (args.length === 0 || (args.length === 1 && args[0] === 'help')) {
  printHelp();
  process.exit(0);
}

if (!filename) {
  printHelp();
  process.exit(0);
}

if (!command) {
  printHelp();
  process.exit(0);
}

switch (command) {
  case 'create':
    writeShoppingList(filename, {});
    break;

  case 'delete':
    if (existsSync(filename)) {
      unlinkSync(filename);
    }
    break;

  case 'add':
    if (!item) {
      console.error('No elem specified.');
      break;
    }
    const addList = readShoppingList(filename);
    let addQty = 1;
    if (quantity !== undefined) {
      const num = Number(quantity);
      if (!isNaN(num)) {
        addQty = num;
      }
    }

    if (addQty < 0) {
      if (addList[item]) {
        addList[item] += addQty;
        if (addList[item] <= 0) {
          delete addList[item];
        }
      }
    } else {
      addList[item] = (addList[item] || 0) + addQty;
    }
    writeShoppingList(filename, addList);
    break;

  case 'rm':
    if (!item) {
      console.error('No elem specified.');
      break;
    }
    const rmList = readShoppingList(filename);

    if (quantity === undefined) {
      if (rmList[item]) {
        delete rmList[item];
      }
    } else {
      const num = Number(quantity);
      if (isNaN(num)) {
        console.error('Unexpected request: nothing has been removed');
        break;
      }

      if (num < 0) {
        rmList[item] = (rmList[item] || 0) + Math.abs(num);
      } else {
        if (rmList[item]) {
          rmList[item] -= num;
          if (rmList[item] <= 0) {
            delete rmList[item];
          }
        }
      }
    }
    writeShoppingList(filename, rmList);
    break;

  case 'ls':
    const lsList = readShoppingList(filename);
    printList(lsList);
    break;

  case 'help':
    printHelp();
    break;

  default:
    const defaultList = readShoppingList(filename);
    printList(defaultList);
    break;
}