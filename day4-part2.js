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

const testArray = [];
for (let i = 8; i <= 24; i++) {
  testArray.push(splitData[i]);
}

splitData.push('');

const eyeColors = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'];
const hclRegex = /#[0-9a-f]{6}/;
const pidRegex = /[0-9]{9}/;


let objArray = [];
let tempObj = {};

for (const i of splitData) {
  if (i.length > 0) {
    if (i.substring(0, 3) == 'byr') {
      if (parseInt(i.substring(4)) >= 1920 && parseInt(i.substring(4)) <= 2002) {
        tempObj = {
          [i.substring(0, 3)]: parseInt(i.substring(4)),
          ...tempObj
        };
      }
    }

    if (i.substring(0, 3) == 'iyr') {
      if (parseInt(i.substring(4)) >= 2010 && parseInt(i.substring(4)) <= 2020) {
        tempObj = {
          [i.substring(0, 3)]: parseInt(i.substring(4)),
          ...tempObj
        };
      }
    }

    if (i.substring(0, 3) == 'eyr') {
      if (parseInt(i.substring(4)) >= 2020 && parseInt(i.substring(4)) <= 2030) {
        tempObj = {
          [i.substring(0, 3)]: parseInt(i.substring(4)),
          ...tempObj
        };
      }
    }

    if (i.substring(0, 3) == 'hgt') {
      if (i.substring(7) == 'cm') {
        if (parseInt(i.substring(4, 7)) >= 150 && parseInt(i.substring(4, 7)) <= 193) {
          tempObj = {
            [i.substring(0, 3)]: parseInt(i.substring(4, 7)),
            ...tempObj
          };
        }
      }

      if (i.substring(6) == 'in') {
        if (parseInt(i.substring(4, 6)) >= 59 && parseInt(i.substring(4, 6)) <= 76) {
          tempObj = {
            [i.substring(0, 3)]: parseInt(i.substring(4, 6)),
            ...tempObj
          };
        }
      }
    }

    if (i.substring(0, 3) == 'hcl') {
      if (hclRegex.test(i.substring(4)) && i.substring(4).length == 7) {
        tempObj = {
          [i.substring(0, 3)]: i.substring(4),
          ...tempObj
        };
      }
    }

    if (i.substring(0, 3) == 'ecl') {
      if (eyeColors.includes(i.substring(4))) {
        tempObj = {
          [i.substring(0, 3)]: i.substring(4),
          ...tempObj
        };
      }
    }

    if (i.substring(0, 3) == 'pid') {
      if (pidRegex.test(i.substring(4)) && i.substring(4).length == 9) {
        tempObj = {
          [i.substring(0, 3)]: i.substring(4),
          ...tempObj
        };
      }
    }
  } else {
    objArray.push(tempObj);
    tempObj = {};
  }
}

let counter = 0

for (const i of objArray) {
  let keyArray = Object.keys(i);

  if (keyArray.length == 7) {
    counter++;
  }
}

console.log(counter);
