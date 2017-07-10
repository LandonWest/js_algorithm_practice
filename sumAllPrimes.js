// Sum All Primes
//
// Sum all the prime numbers up to and including the provided number.
//
// A prime number is defined as a number greater than one and having only two
// divisors, one and itself. For example, 2 is a prime number because it's only
// divisible by one and two.
//
// The provided number may not be a prime.

// First passing attempt:
function sumPrimes(num) {
  function isPrime(x) {
    for (let i = 2; i <= x; i++) {
      if (x % i === 0 && x != i) {
        return false;
      }
    }
    return true;
  }

  let primesArr = [];

  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) primesArr.push(i);
  }

  return primesArr.reduce((a,b) => a + b);
}

// Tests:
// sumPrimes(10) should return a number.
// sumPrimes(10) should return 17.
// sumPrimes(977) should return 73156.
