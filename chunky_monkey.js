// Chunky Monkey
// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

// Tests:
// chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]].
// chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) should return [[0, 1, 2], [3, 4, 5]].
// chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) should return [[0, 1], [2, 3], [4, 5]].
// chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) should return [[0, 1, 2, 3], [4, 5]].
// chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3) should return [[0, 1, 2], [3, 4, 5], [6]].
// chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].

function chunkArrayInGroups(arr, size) {
  var answer = [];
  var i = 0;

  while ( i < arr.length ) {
    answer.push(arr.slice(i, i + size));
    i += size;
  }
  return answer;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);


// Possible answers from the FCC Wiki:
//
// Solution 2:
//
// function chunkArrayInGroups(arr, size) {
//   // Break it up
//   // It's already broken :(
//   arr = arr.slice();
//   var arr2 = [];
//   for(var i = 0, len = arr.length; i < len; i+=size) {
//     arr2.push(arr.slice(0, size));
//     arr = arr.slice(size);
//   }
//   return arr2;
// }
//
// Solution 4:
//
// // splice & slice, avoiding size counting
// function chunkArrayInGroups(arr, size) {
//   var ar = arr.slice();
//   var res = [];
//   do {
//     res.push(ar.splice(0, size));
//   } while (ar.length > 0);
//   return res;
// }
