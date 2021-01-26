const fs = require('fs');

const inputData = fs.readFileSync('./day1-input.txt', 'utf8');
const dataArray = inputData.split('\r\n');
const numSet = new Set();
const numSet2 = new Set();


for (const i of dataArray) {
  numSet.add(parseInt(i));
}

let num1 = 0;
let num2 = 0;
let num3 = 0;
let result = 0;

for (const i of dataArray) {
  for (const ii of numSet) {
    if (numSet.has(2020 - (parseInt(i) + ii))) {
      num1 = parseInt(i);
      num2 = ii;
      num3 = 2020 - (parseInt(i) + ii);
      result = num1 * num2 * num3;
      break;
    }
  }
}

console.log(num1, num2, num3, result);
