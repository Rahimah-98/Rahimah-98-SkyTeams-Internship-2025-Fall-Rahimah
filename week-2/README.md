// Swap two variables without using a temporary variable

function swapNums(a, b) {
[a, b] = [b, a];
return [a, b];
}

console.log(swapNums(4, 5));
