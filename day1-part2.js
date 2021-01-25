const fs = require('fs');

const inputData = fs.readFileSync('./day1-input.txt', 'utf8');
const dataArray = inputData.split('\r\n');
const numArray = [];

dataArray.forEach((item) => {
  numArray.push(parseInt(item));
});
