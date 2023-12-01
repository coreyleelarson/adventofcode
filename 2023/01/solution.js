import { input } from "./input.js";

const numberMap = new Map();
numberMap.set("zero", 0);
numberMap.set("one", 1);
numberMap.set("two", 2);
numberMap.set("three", 3);
numberMap.set("four", 4);
numberMap.set("five", 5);
numberMap.set("six", 6);
numberMap.set("seven", 7);
numberMap.set("eight", 8);
numberMap.set("nine", 9);

const numberRegexPattern = new RegExp(
  `${[Array.from(numberMap.keys()), Array.from(numberMap.values())]
    .flat()
    .join("|")}`
);

const findNumber = (str = "") => {
  const match = str.match(numberRegexPattern, "g")?.[0];

  if (!match) return false;
  if (numberMap.get(match)) return numberMap.get(match);
  if (!isNaN(parseInt(match))) return parseInt(match);
};

function getTotal(includeStringNumbers = false) {
  let runningTotal = 0;

  for (const line of input.trim().split("\n")) {
    let left = line[0];
    let right = line[line.length - 1];

    for (let i = 1; i <= line.length + 1; i++) {
      const leftNumber = findNumber(left);
      const rightNumber = findNumber(right);

      if (typeof leftNumber === "number" && typeof rightNumber === "number") {
        left = leftNumber;
        right = rightNumber;
        break;
      }

      if (typeof leftNumber !== "number") {
        if (includeStringNumbers) {
          left += line[i];
        } else {
          left = line[i];
        }
      }

      if (typeof rightNumber !== "number") {
        if (includeStringNumbers) {
          right = line[line.length - i - 1] + right;
        } else {
          right = line[line.length - i - 1];
        }
      }
    }

    runningTotal += Number(`${left}${right}`);
  }

  return runningTotal;
}

console.log(`Answer Puzzle 1: ${getTotal()}`);
console.log(`Answer Puzzle 2: ${getTotal(true)}`);
