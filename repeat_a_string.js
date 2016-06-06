// Repeat a string repeat a string
// Repeat a given string (first argument) num times (second argument). Return an empty string if num is a negative number.
//
// TESTS:

// repeatStringNumTimes("*", 3) should return "***".
// repeatStringNumTimes("abc", 3) should return "abcabcabc".
// repeatStringNumTimes("abc", 4) should return "abcabcabcabc".
// repeatStringNumTimes("abc", 1) should return "abc".
// repeatStringNumTimes("*", 8) should return "********".
// repeatStringNumTimes("abc", -2) should return "".


function repeatStringNumTimes(str, num) {
  var answer = "";

  for (var i = 0; i < num; i++) {
    answer += str;
  }

  return answer;
}

repeatStringNumTimes("abc", 3);



// Other Possible Solutions from the WIKI: ( I like the first one. )
// _______________________________________________
// _______________________________________________
//
// First Solution
//
// function repeatStringNumTimes(str, num) {
//   var accumulatedStr = '';
//
//   while (num > 0) {
//     accumulatedStr += str;
//     num--;
//   }
//
//   return accumulatedStr;
// }
//
// _____________________________________________
// Second Solution
//
// function repeatStringNumTimes(str, num) {
//   var newstr = [];
//   for (var i = 0; i < num; i++) {
//     newstr.push(str);
//   }
//   return newstr.join('');
// }
//
// repeatStringNumTimes("abc", 3);
//
// _______________________________________________
// Third Solution
//
// (using Recursion)
//
// function repeatStringNumTimes(str, num) {
//   if(num < 0)
//     return "";
//   if(num === 1)
//     return str;
//   else
//     return str + repeatStringNumTimes(str, num - 1);
// }
//
// _______________________________________________
// Fourth Solution
//
// (Declarative approach)
//
// function repeatStringNumTimes(str, num) {
//   return num >= 0 ? str.repeatStringNumTimes(num) : "";
// }
//
// repeatStringNumTimes("abc", 3);
