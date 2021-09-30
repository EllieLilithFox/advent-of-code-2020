const fs = require('fs');

const inputData = fs.readFileSync('./day5-input.txt', 'utf8');
const arrayData = inputData.split('\n');

function highestSeatID(boardingPasses) {
  const rows = [];

  for (let i = 0; i < 128; i++) {
    rows.push(i);
  }

  let highestSeatId = 0;

  for (const pass of boardingPasses) {
    const passRows = pass.slice(0, 7);
    const passAisle = pass.slice(7);
    const row = splitRows(rows, passRows);
    const seat = splitAisle(passAisle);
    const id = (row[0] * 8) + seat[0];

    if (id > highestSeatId) {
      highestSeatId = id;
    }
  }

  return highestSeatId;
}

function splitRows(rows, bpRows) {
  let slicedRows = rows;
  for (let i = 0; i < bpRows.length; i++) {
    if (bpRows[i] == 'F') {
      slicedRows = slicedRows.slice(0, (slicedRows.length / 2))
    } else {
      slicedRows = slicedRows.slice((slicedRows.length / 2), (slicedRows.length))
    }
  }

  return slicedRows
}

function splitAisle(bpAisle) {
  let seats = [0, 1, 2, 3, 4, 5, 6, 7]
  for (let i = 0; i < bpAisle.length; i++) {
    if (bpAisle[i] == 'L') {
      seats = seats.slice(0, (seats.length / 2))
    } else {
      seats = seats.slice((seats.length / 2), (seats.length))
    }
  }

  return seats;
}

const id = highestSeatID(arrayData);

console.log(id)
