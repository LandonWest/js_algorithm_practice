// Factorialize a Number
// Return the factorial of the provided integer.
//
// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
//
// Factorials are often represented with the shorthand notation n!
//
// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120


// factorialize(5) should return a number.
// factorialize(5) should return 120.
// factorialize(10) should return 3628800.
// factorialize(20) should return 2432902008176640000.
// factorialize(0) should return 1.


function factorialize(num) {
  var arr = [];
  // 0! always equals 1
  if (num === 0) {
    return 1;
  } else {
    // start loop to create array of numbers
    for (i = num; i > 0; i--) {
      arr.unshift(i);
    }
    // reduce array by multiplying each number by the next and return total
    var fact = arr.reduce(function(a, b) {
      return a * b;
    });

    return fact;
  }
}

factorialize(0);





//_____________________________________________
//Spoiler Alert!
//Solution ahead!
//Best Code Solution using Recursion:

// function factorialize(num) {
//   if (num === 0) { return 1; }
//   return num * factorialize(num-1);
// }
// factorialize(5);
//_____________________________________________
