// Steamroller
//
// Flatten a nested array. You must account for varying levels of nesting.

// First passing attempt with hints from fcc forum and stack overflow
function steamrollArray(arr) {
  let flattened = [];

  function flat(arg) {
    if (Array.isArray(arg)) {
      for (let a in arg) {
        flat(arg[a]);
      }
    } else {
      flattened.push(arg);
    }
  };

  arr.forEach(flat);
  return flattened;
}

// Second passing solution implemented from fcc forum
function steamrollArray(arr) {
  let flattened = [].concat(...arr);
  return flattened.some(Array.isArray) ? steamrollArray(flattened) : flattened;
}

// Tests:
// steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].
// steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].
// steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].
// steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].
