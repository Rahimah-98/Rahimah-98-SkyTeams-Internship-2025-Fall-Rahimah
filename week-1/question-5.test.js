function testLargestNum() {
  const arr = [1, 2, 3, 12, 5];

  const expectedOutput = 12;

  const actual = largestNum(arr);

  console.log(actual === expectedOutput ? 'passed' : 'failed');
}

testLargestNum();
