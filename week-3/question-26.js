// convert Decimal to Binary: Convert a decimal number to its binary representation

function decToBin(dec) {
  return (dec >>> 0).toString(2);
}

console.log(decToBin(10)); // Output: 1010
