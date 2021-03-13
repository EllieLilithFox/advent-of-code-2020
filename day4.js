const fs = require('fs');

const inputData = fs.readFileSync('./day4-input.txt', 'utf8');
const arrayData = inputData.split('\r\n');

let splitData = [];

for (const i of arrayData) {
  if (i.length > 0) {
    splitData = splitData.concat(i.split(' '));
  } else {
    splitData.push(i);
  }
}

splitData.push('');

let objArray = [];
let tempObj = {};

for (const i of splitData) {
  if (i.length > 0) {
    tempObj = {
      [i.slice(0, 3)]: i.slice(4),
      ...tempObj
    };
  } else {
    objArray.push(tempObj);
    tempObj = {};
  }
}

let counter = 0;

for (const i of objArray) {
  let keyArray = Object.keys(i);
  const cidIndex = keyArray.findIndex((element) => element == 'cid');

  if (cidIndex != -1) {
    keyArray.splice(cidIndex, 1);
  }

  if (keyArray.length == 7) {
    counter++;
  }
}

// console.log(objArray[3]);
// console.log(keyArray);
console.log(counter);
