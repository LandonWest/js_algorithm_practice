// Check for Palindromes
//
// Return true if the given string is a palindrome. Otherwise, return false.
//
// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
//
// Note
// You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything lower case in order to check for palindromes.
//
// We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.
//
// TESTS:
// palindrome("eye") should return a boolean.
// palindrome("eye") should return true.
// palindrome("race car") should return true.
// palindrome("not a palindrome") should return false.
// palindrome("A man, a plan, a canal. Panama") should return true.
// palindrome("never odd or even") should return true.
// palindrome("nope") should return false.
// palindrome("almostomla") should return false.
// palindrome("My age is 0, 0 si ega ym.") should return true.
// palindrome("1 eye for of 1 eye.") should return false.
// palindrome("0_0 (: /-\ :) 0-0") should return true.

function palindrome(str) {
  // str. remove non-alphanumeric chars & toLowercase
  str = str.replace( /[\W_]/g, '').toLowerCase();
  // console.log("str after regex & lowercase: " + str);
  // reverse the string
  var newStr = str.split('').reverse().join('');
  // console.log("newStr after reverse: " + newStr);
  // compare the original to its reverse
  if (newStr === str) {
    return true;
  } else {
    return false;
  }
}

palindrome("race car");






// SPOILER ALERT! this is one way to do it from the the wiki:

function palindrome(str) {
  return str.replace(/[\W_]/g, '').toLowerCase() ===
         str.replace(/[\W_]/g, '').toLowerCase().split('').reverse().join('');
}

palindrome("eye"); 
