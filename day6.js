const fs = require('fs');

const inputData = fs.readFileSync('./day6-input.txt', 'utf8');
const arrayData = inputData.split('\n');

const testData = ['tesnouwyrdf', 'twofuspcmvenh', '']

function sumQuestions(declarations) {
  let sum = 0;
  let set = new Set();

  for (const answer of declarations) {
    if (answer == '') {
      sum = set.size + sum;
      set = new Set()
    }

    for (const letter of answer) {
      set.add(letter);
    }
  }

  return sum;
}

const sum = sumQuestions(arrayData)

console.log(sum);
