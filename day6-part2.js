const fs = require('fs');

const inputData = fs.readFileSync('./day6-input.txt', 'utf8');
const arrayData = inputData.split('\n');

const testData = ['abc', 'ab', 'ab', 'ab', '', 'abc', ''];

function sumQuestions(declarations) {
  let sum = 0;
  let personCount = 0;
  let answerLetters = {};

  for (const answer of declarations) {
    if (answer == '') {
      for (const value of Object.values(answerLetters)) {
        if (value == personCount) {
          sum = sum + 1;
        }
      }
      personCount = 0;
      answerLetters = {};
    } else {
      for (const letter of answer) {
        answerLetters[letter] = (answerLetters[letter] + 1) || 1;
      }
      personCount++
    }
  }
  return sum;
}

const result = sumQuestions(arrayData)

console.log(result)
