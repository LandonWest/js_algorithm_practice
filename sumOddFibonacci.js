// Sum All Odd Fibonacci Numbers
//
// Given a positive integer num, return the sum of all odd Fibonacci numbers that
// are less than or equal to num.
//
// The first two numbers in the Fibonacci sequence are 1 and 1. Every additional
// number in the sequence is the sum of the two previous numbers. The first six
// numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
//
// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less
// than 10 are 1, 1, 3, and 5.

// First passing attempt:
function sumFibs(num) {
  let fibs = [1,1];

  for (let i = 1; i <= num; i++) {
    if (fibs[i] <= num) {
      fibs.push(fibs[i-1] + fibs[i]);
    } else {
      break;
    }
  }

  fibs.pop();

  return fibs.filter(fib => fib % 2)
             .reduce((a,b) => a+b);
}

// Tests:
// sumFibs(1) should return a number.
// sumFibs(1000) should return 1785.
// sumFibs(4000000) should return 4613732.
// sumFibs(4) should return 5.
// sumFibs(75024) should return 60696.
// sumFibs(75025) should return 135721.
