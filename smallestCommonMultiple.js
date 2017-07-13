// Smallest Common Multiple
//
// Find the smallest common multiple of the provided parameters that can be evenly
// divided by both, as well as by all sequential numbers in the range between these
// parameters.
//
// The range will be an array of two numbers that will not necessarily be in
// numerical order.
//
// e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is
// evenly divisible by all numbers between 1 and 3.

// My implementation relying on hints from stack overflow, math blogs, and fcc forum
function smallestCommons(arr) {
  const min = Math.min(arr[0], arr[1]),
        max = Math.max(arr[0], arr[1]);

  function range(min, max) {
    let arr = [];

    for (let i = max; i >= min; i--) {
      arr.push(i);
    }
    return arr;
  }

  function gcd(x,y) {
    return y === 0 ? x : gcd(y, x % y);
  }

  function lcm(x, y) {
    return (x * y) / gcd(x, y);
  }

  let multiple = min;

  range(min, max).forEach(value => {
    multiple = lcm(multiple, value);
  });

  return multiple;
}

// Tests:
// smallestCommons([1, 5]) should return a number.
// smallestCommons([1, 5]) should return 60.
// smallestCommons([5, 1]) should return 60.
// smallestCommons([1, 13]) should return 360360.
// smallestCommons([23, 18]) should return 6056820.
