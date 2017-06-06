// Given an array of two numbers, return the sum of those two numbers and all numbers in between.
// The lowest number will not always come first.

function sumAll(arr) {
  let [a, b] = arr;
  let max = Math.max(a,b);
  let min = Math.min(a,b);

  let newArr = [min];

  while (min < max) {
    newArr.push(min += 1);
  }

  let sum = newArr.reduce((acc, val) => acc + val);
  return sum;
}

// Tests
// sumAll([1, 4]) should return a number.
// sumAll([1, 4]) should return 10.
// sumAll([4, 1]) should return 10.
// sumAll([5, 10]) should return 45.
// sumAll([10, 5]) should return 45.
