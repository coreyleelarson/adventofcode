import { input } from './input.js';

let caloriesList = [];
let calorieCount = 0;

// Add up all calories for each elf.
for (const calories of input.trim().split('\n')) {
  if (calories === '') {
    caloriesList.push(calorieCount);
    calorieCount = 0;
  } else {
    calorieCount += Number(calories);
  }
}

// Sort calorie list descending.
caloriesList.sort((a, b) => b > a ? 1 : -1);

console.log(`Answer Puzzle 1: ${caloriesList[0]}`);
console.log(`Answer Puzzle 2: ${caloriesList[0] + caloriesList[1] + caloriesList[2]}`);
