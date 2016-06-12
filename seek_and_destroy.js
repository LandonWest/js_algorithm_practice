// Seek and Destroy
// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
//
// TESTS:
// destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1].
// destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) should return [1, 5, 1].
// destroyer([3, 5, 1, 2, 2], 2, 3, 5) should return [1].
// destroyer([2, 3, 2, 3], 2, 3) should return [].
// destroyer(["tree", "hamburger", 53], "tree", 53) should return ["hamburger"].


function destroyer(arr) {

  var args = Array.from(arguments);
  args.splice(0, 1);


  var filtered = arr.filter(function(value) {
    return args.indexOf(value) === -1;
  });

  return filtered;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);


// Other possible solutions from FCC Wiki:
// Code Solution:
//
// function destroyer(arr) {
//   var args = Array.prototype.slice.call(arguments);
//   args.splice(0, 1);
//   return arr.filter(function(element) {
//     return args.indexOf(element) === -1;
//   });
// }
//
// Code Explanation:
//
// The first line will turn the arguments variable into a full array instead of the limited array it currently is.
// Next I remove the first argument since I don’t need, since I only want the other arguments passed besides the first which is the array we are going to compare against.
// Then use the filter() to filter out the elements that are on the array and keep the ones that are not.
