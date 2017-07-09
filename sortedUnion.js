// Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
//
// In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
//
// The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

// First passing attempt:
function uniteUnique(arr) {
  const flattened = [...arguments].reduce(
    (acc, curr) => acc.concat(curr),
    []
  );

  return flattened.reduce(
    (allVals, val) => {
      if (!allVals.includes(val)) {
        allVals.push(val);
      }
      return allVals;
    }, []
  );
}

// ES6 Set from fcc forum
function uniteUnique(arr) {
  //make an array out of arguments and flatten it (using the spread operator)
  const args = [].concat(...arguments);
  // create a Set
  return [...new Set(args)];
}

// Tests:
// uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].
// uniteUnique([1, 3, 2], [1, [5]], [2, [4]]) should return [1, 3, 2, [5], [4]].
// uniteUnique([1, 2, 3], [5, 2, 1]) should return [1, 2, 3, 5].
// uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) should return [1, 2, 3, 5, 4, 6, 7, 8].
