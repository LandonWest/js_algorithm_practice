// Where do I belong
// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted.
//
// For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).
//
// Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).
//
// TESTS:
// getIndexToIns([10, 20, 30, 40, 50], 35) should return 3.
// getIndexToIns([10, 20, 30, 40, 50], 30) should return 2.
// getIndexToIns([40, 60], 50) should return 1.
// getIndexToIns([3, 10, 5], 3) should return 0.
// getIndexToIns([5, 3, 20, 3], 5) should return 2.
// getIndexToIns([2, 20, 10], 19) should return 2.
// getIndexToIns([2, 5, 10], 15) should return 3.


// MY first passing attempt:
function getIndexToIns(arr, num) {
  var sorted = arr.sort(function(a,b){
    return a-b;
  });

  var index = sorted.indexOf(num);

  if ( index !== -1) {
    return index;
  } else {
    for (i = 0; i < sorted.length; i++) {
      if (num > sorted[sorted.length - 1]) {
        return sorted.length;
      } else if (num > sorted[i] && num < sorted[i + 1]) {
        return i + 1;
      }
    }
  }
}

// MY refactored, passing attempt:
function getIndexToIns(arr, num) {
  var sorted = arr.sort(function(a,b){
    return a-b;
  });

  for (i = 0; i < sorted.length; i++) {
    if (sorted[i] >= num) {
      return i;
    }
  }

  return sorted.length;
}


// Other possible solutions from FCC wiki:
// Code Solution 2:
//
// function getIndexToIns(arr, num) {
//   arr.push(num);
//   arr.sort(function(a, b)
//            {return a-b;}
//           );
//   return arr.indexOf(num);
//  }
// 
// Code Explanation:
//
// First insert the number into the array using the Array.push() method.
// Then use the numerical sort method to sort the elements of the array. in the end just return the index value of the number that was push earlier using the Array.indexOf() method.
