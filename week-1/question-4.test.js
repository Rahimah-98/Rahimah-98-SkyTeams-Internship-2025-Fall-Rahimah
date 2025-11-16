function testReverseStr() {
  const input = 'Hello';
  const expectedOutput = 'olleH';

  const actual = reverseStr(input);
  console.log(actual === expectedOutput ? 'passed' : 'failed');
}

testReverseStr();
