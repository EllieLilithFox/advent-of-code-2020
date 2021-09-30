const fs = require('fs');

const inputData = fs.readFileSync('./day5-input.txt', 'utf8');
const arrayData = inputData.split('\n');

function seatIds(boardingPasses) {
  const rows = [];

  for (let i = 0; i < 128; i++) {
    rows.push(i);
  }

  let seatIdsArray = [];

  for (const pass of boardingPasses) {
    const passRows = pass.slice(0, 7);
    const passAisle = pass.slice(7);
    const row = splitRows(rows, passRows);
    const seat = splitAisle(passAisle);
    const id = (row[0] * 8) + seat[0];

    seatIdsArray.push(id)
  }

  return seatIdsArray.sort();
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

function mySeat(sortedSeats) {
  for (let i = 0; i < sortedSeats.length; i++) {
    if ((sortedSeats[i] + 1) == (sortedSeats[i + 1] - 1)) {
      return sortedSeats[i] + 1;
    }
  }
}

const sortedSeats = seatIds(arrayData);
const id = mySeat(sortedSeats)

console.log(id)
