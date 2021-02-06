const fs = require('fs');

const inputData = fs.readFileSync('./day3-input.txt', 'utf8');
const dataArray = inputData.split('\r\n');

let counter = 0;
let stringIndex = 0;

for (let i = 0; i < dataArray.length; i++) {
  if (stringIndex > 30) {
    stringIndex = stringIndex - 31;
  }
  if (dataArray[i][stringIndex] == '#') {
    counter++
  }
  stringIndex += 3
}

console.log(counter);
