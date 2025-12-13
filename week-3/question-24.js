// Generate Pascal’s Triangle: Implement pascalTriangle(rows), which prints Pascal’s Triangle up to n rows.

function pascalTriangle(rows) {
  for (let i = 0; i < rows; i++) {
    let row = '';
    let value = 1;
    for (let j = 0; j <= i; j++) {
      row += value + ' ';
      value = (value * (i - j)) / (j + 1);
    }
    console.log(row);
  }
}

pascalTriangle(5);

// Output:
// 1
// 1 1
// 1 2 1
// 1 3 3 1
// 1 4 6 4 1
