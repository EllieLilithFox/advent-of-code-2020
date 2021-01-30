const fs = require('fs');

const inputData = fs.readFileSync('./day2-input.txt', 'utf8');
const dataArray = inputData.split('\r\n');

const digitsRegex = /([0-9][0-9])|([0-9])/g;

const lettersRegex = /[a-z]:|[a-z]/g

let counter = 0;

for (const i of dataArray) {
  const digitsArray = i.match(digitsRegex);
  const digitOne = parseInt(digitsArray[0]);
  const digitTwo = parseInt(digitsArray[1]);

  const letters = i.match(lettersRegex);

  const firstLetter = letters.shift()[0];

  if (letters[digitOne - 1] == firstLetter ^ letters[digitTwo - 1] == firstLetter) {
    counter++;
  }
};

console.log(counter);
