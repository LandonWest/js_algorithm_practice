// Falsy Bouncer
//
// Remove all falsy values from an array.
// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
//
// TEST:
// bouncer([7, "ate", "", false, 9]) should return [7, "ate", 9].
// bouncer(["a", "b", "c"]) should return ["a", "b", "c"].
// bouncer([false, null, 0, NaN, undefined, ""]) should return [].
// bouncer([1, null, NaN, 2, undefined]) should return [1, 2].


function bouncer(arr) {
  var bad = [false, null, 0, "", undefined, NaN];

  var filtered = arr.filter(function(value) {
    return !(bad.includes(value));
  });

  return filtered;
}

bouncer([7, "ate", "", false, 9]);


// no other answers available in Wiki
