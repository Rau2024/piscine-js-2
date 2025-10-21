#!/usr/bin/env node

import { readdirSync, readFileSync, writeFileSync, existsSync, statSync } from 'fs';

const args = process.argv.slice(2);
const guestDir = args[0];
const outputFile = args[1];

if (!guestDir || !outputFile) {
  console.error('Usage: node happiness-manager.mjs <guest-directory> <output-file.json>');
  process.exit(1);
}

function readGuestFiles(directory) {
  try {
    const files = readdirSync(directory);
    const guests = [];

    for (const file of files) {
      const filePath = `${directory}/${file}`;
      const stats = statSync(filePath);

      if (stats.isFile() && file.endsWith('.json')) {
        try {
          const data = readFileSync(filePath, 'utf8');
          const guestData = JSON.parse(data);
          guests.push(guestData);
        } catch (error) {
          continue;
        }
      }
    }

    return guests;
  } catch (error) {
    return [];
  }
}

function readExistingShoppingList(filename) {
  try {
    if (existsSync(filename)) {
      const data = readFileSync(filename, 'utf8');
      return JSON.parse(data);
    }
    return {};
  } catch (error) {
    return {};
  }
}

function writeShoppingList(filename, list) {
  writeFileSync(filename, JSON.stringify(list));
}

const guests = readGuestFiles(guestDir);
const vipGuests = guests.filter(guest => guest.answer === 'yes');

if (vipGuests.length === 0) {
  console.log('No one is coming.');
  process.exit(0);
}

const drinkCounts = {
  'iced tea': 0,
  'iced-tea': 0,
  'water': 0,
  'sparkling water': 0,
  'sparkling-water': 0,
  'soft': 0
};

const foodCounts = {
  'veggie': 0,
  'vegan': 0,
  'carnivore': 0,
  'fish': 0,
  'omnivore': 0,
  'everything': 0
};

for (const guest of vipGuests) {
  if (guest.drink && drinkCounts.hasOwnProperty(guest.drink)) {
    drinkCounts[guest.drink]++;
  }

  if (guest.food && foodCounts.hasOwnProperty(guest.food)) {
    foodCounts[guest.food]++;
  }
}

const shoppingList = readExistingShoppingList(outputFile);

if (drinkCounts['iced tea'] > 0 || drinkCounts['iced-tea'] > 0) {
  shoppingList['iced-tea-bottles'] = Math.ceil((drinkCounts['iced tea'] + drinkCounts['iced-tea']) / 6);
}

if (drinkCounts['water'] > 0) {
  shoppingList['water-bottles'] = Math.ceil(drinkCounts['water'] / 4);
}

if (drinkCounts['sparkling water'] > 0 || drinkCounts['sparkling-water'] > 0) {
  shoppingList['sparkling-water-bottles'] = Math.ceil((drinkCounts['sparkling water'] + drinkCounts['sparkling-water']) / 4);
}

if (drinkCounts['soft'] > 0) {
  shoppingList['soft-bottles'] = Math.ceil(drinkCounts['soft'] / 4);
}

const veggiePlusVegan = foodCounts['veggie'] + foodCounts['vegan'];
if (veggiePlusVegan > 0) {
  shoppingList['eggplants'] = Math.ceil(veggiePlusVegan / 3);
  shoppingList['courgettes'] = Math.ceil(veggiePlusVegan / 3);
  shoppingList['mushrooms'] = veggiePlusVegan;
  shoppingList['hummus'] = Math.ceil(veggiePlusVegan / 3);
}

if (foodCounts['carnivore'] > 0) {
  shoppingList['burgers'] = foodCounts['carnivore'];
}

if (foodCounts['fish'] > 0) {
  shoppingList['sardines'] = foodCounts['fish'];
}

if (foodCounts['omnivore'] > 0 || foodCounts['everything'] > 0) {
  shoppingList['kebabs'] = foodCounts['omnivore'] + foodCounts['everything'];
}

const totalFoodGuests = Object.values(foodCounts).reduce((sum, count) => sum + count, 0);
const totalVips = vipGuests.length;
if (totalFoodGuests > 0) {
  shoppingList['potatoes'] = totalFoodGuests;
} else if (totalVips > 0) {
  shoppingList['potatoes'] = totalVips;
}

writeShoppingList(outputFile, shoppingList);