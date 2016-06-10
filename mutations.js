// Mutations
//
// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
//
// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
//
// The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".
//
// Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".

// TESTS:
// mutation(["hello", "hey"]) should return false.
// mutation(["hello", "Hello"]) should return true.
// mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) should return true.
// mutation(["Mary", "Army"]) should return true.
// mutation(["Mary", "Aarmy"]) should return true.
// mutation(["Alien", "line"]) should return true.
// mutation(["floor", "for"]) should return true.
// mutation(["hello", "neo"]) should return false.
// mutation(["voodoo", "no"]) should return false.


function mutation(arr) {

  var first = arr[0].toLowerCase().split('');
  var second = arr[1].toLowerCase().split('');


  for (var i = 0; i < second.length; i++) {
    if ( first.indexOf(second[i]) !== -1 ) {
      console.log("found: " + second[i]);
    } else {
      console.log("could not find: " + second[i]);
      return false;
    }
  }
  return true;
}

mutation(["hello", "Hello"]);



// Spoiler Alert!
// Other possible solutions from FCC Wiki:
//
// First solution (Procedural):
//
// function mutation(arr) {
//   var test = arr[1].toLowerCase();
//   var target = arr[0].toLowerCase();
//   for (i=0;i<test.length;i++) {
//     if (target.indexOf(test[i]) < 0)
//       return false;
//   }
//   return true;
//  }
//
// Second Solution (Declarative):
//
// function mutation(arr) {
//  return arr[1].toLowerCase()
//               .split('')
//               .every(function (letter){
//                 return arr[0].toLowerCase()
//                              .indexOf(letter) != -1;
//               });
// }
//
// Code Explanations:
//
// First solution (Procedural):
//
// First we make the two strings in the array lowercase. test will hold what we are looking for in target.
// Then we loop through our test characters and if any of them is not found we return false.
//
// If they are all found, the loop will finish without returning anything and we get to return true.
//
// Second solution (Declarative):
//
// Grab the second string, lowercase and turn it into an array; then make sure every one of its letters is a part of the lowercased first string.
//
// Every will basically give you letter by letter to compare, which we do by using indexOf on the first string. indexOf will give you -1 if the current letter is missing. We check that not to be the case, for if this happens even once every will be false.
