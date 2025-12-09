// 1. Count vowels in a string: Count the number of vowels (a, e, i, o, u) in a given string

function countvowels(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;

  for (let char of str.toLowerCase()) {
    vowels.includes(char) ? count++ : null;
  }

  return count;
}

console.log(countvowels('SkyTeams Internship')); // Output: 5
console.log(countvowels('Hello World')); // Output: 3
console.log(countvowels('Rahimah Ansari')); // Output: 6
