// Fibonacci series up to N terms: Generate the Fibonacci sequence (0, 1, 1, 2, 3, 5, 8…) up to N terms

function fibonacciSeries(n) {
  let fibSeries = [];
  for (let i = 0; i < n; i++) {
    if (i === 0) {
      fibSeries.push(0);
    } else if (i === 1) {
      fibSeries.push(1);
    } else {
      fibSeries.push(fibSeries[i - 1] + fibSeries[i - 2]);
    }
  }
  return fibSeries;
}

console.log(fibonacciSeries(7)); // Output: [0, 1, 1, 2, 3, 5, 8]
