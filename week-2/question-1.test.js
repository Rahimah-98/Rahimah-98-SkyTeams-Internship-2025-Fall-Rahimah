function testSwap() {
  const outputs = [
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
  ];

  outputs.forEach(([a, b]) => {
    const [newA, newB] = swapNums(a, b);
    console.log(`swapNums(${a}, ${b}) => (${newA}, ${newB})`);
  });
}

testSwap();
