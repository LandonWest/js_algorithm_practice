// Compare two arrays and return a new array with any items only found in one of
// the two given arrays, but not both. In other words, return the symmetric
// difference of the two arrays.

// First Attempt:
function diffArray(arr1, arr2) {
  var newArr = [];

  arr1.forEach(indexA => {
    if (arr2.includes(indexA) == false) {
      newArr.push(indexA);
    }
  });

  arr2.forEach(indexB => {
    if (arr1.includes(indexB) == false) {
      newArr.push(indexB);
    }
  });

  return newArr;
}

// diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

//  Second Attempt w/ hints:
function diffArray(arr1, arr2) {
  var newArr = [];

  function weed(first, second) {
    first.forEach(index => {
      if (!second.includes(index)) {
        newArr.push(index);
      }
    });
  }

  weed(arr1, arr2);
  weed(arr2, arr1);

  return newArr;
}



// Tests:
// diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) should return an array.
// ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["pink wool"].
// ["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["diorite", "pink wool"].
// ["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"] should return [].
// [1, 2, 3, 5], [1, 2, 3, 4, 5] should return [4].
// [1, "calf", 3, "piglet"], [1, "calf", 3, 4] should return ["piglet", 4].
// [], ["snuffleupagus", "cookie monster", "elmo"] should return ["snuffleupagus", "cookie monster", "elmo"].
// [1, "calf", 3, "piglet"], [7, "filly"] should return [1, "calf", 3, "piglet", 7, "filly"].
