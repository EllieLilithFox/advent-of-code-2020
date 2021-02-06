const fs = require('fs');

const inputData = fs.readFileSync('./day3-input.txt', 'utf8');
const dataArray = inputData.split('\r\n');

function countTrees(xDown, yDown) {
  let counter = 0;
  let stringIndex = 0;

  for (let i = 0; i < dataArray.length; i += yDown) {
    if (stringIndex > 30) {
      stringIndex = stringIndex - 31;
    }
    if (dataArray[i][stringIndex] == '#') {
      counter++;
    }
    stringIndex += xDown;
  }

  return counter;
}

let countArray = [];

countArray.push(countTrees(1, 1));
countArray.push(countTrees(3, 1));
countArray.push(countTrees(5, 1));
countArray.push(countTrees(7, 1));
countArray.push(countTrees(1, 2));

let countProduct = 1;

for (const i of countArray) {
  countProduct = countProduct * i;
}

console.log(countArray, countProduct);
