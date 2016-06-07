// Slasher Flick
//
// Return the remaining elements of an array after chopping off n elements from the head.
//
// The head means the beginning of the array, or the zeroth index.
//
// TESTS:
// slasher([1, 2, 3], 2) should return [3].
// slasher([1, 2, 3], 0) should return [1, 2, 3].
// slasher([1, 2, 3], 9) should return [].
// slasher([1, 2, 3], 4) should return [].
// slasher(["burgers", "fries", "shake"], 1) should return ["fries", "shake"].
// slasher([1, 2, "chicken", 3, "potatoes", "cheese", 4], 5) should return ["cheese", 4].

function slasher(arr, howMany) {
  arr.splice(0, howMany);
  return arr;
}

slasher([1, 2, 3], 2);


// Spoiler Alert!
// Solution ahead!
//
// Code Solution:
//
// function slasher(arr, howMany) {
//   // remove the head
//   arr.splice(0,howMany);
//   //return the remaining or the tail  \__/(**)-<
//   return arr;
// }
// slasher([1, 2, 3], 2);

//
// Code Solution 2:
//
// function slasher(arr, howMany) {
//
//   //Return string after the amount chopped off.
//   return arr.slice(howMany);
//
// }
