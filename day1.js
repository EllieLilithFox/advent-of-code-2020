const fs = require('fs');

const inputData = fs.readFileSync('./day1-input.txt', 'utf8');
const dataArray = inputData.split('\r\n');
let numSet = new Set();

let num1 = 0;
let num2 = 0;
let output = 0;

for (const i of dataArray) {
  numSet.add(parseInt(i));
  if (numSet.has(2020 - i)) {
    num1 = 2020 - i;
    num2 = i;
    output = i * (2020 - i);
    break;
  }
};

console.log(num1, num2, output)
