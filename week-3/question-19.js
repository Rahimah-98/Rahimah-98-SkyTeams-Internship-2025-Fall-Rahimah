//  Pattern Printing – Pyramid

function printPyramid(n) {
  for (let i = 1; i <= n; i++) {
    let spaces = ' '.repeat(n - i);
    let stars = '*'.repeat(2 * i - 1);
    console.log(spaces + stars);
  }
}
printPyramid(5);
// Output:
//     *
//    ***
//   *****
//  *******
// *********
