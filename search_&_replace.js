// Search and Replace
// Perform a search and replace on the sentence using the arguments provided and return the new sentence.
//
// First argument is the sentence to perform the search and replace on.
//
// Second argument is the word that you will be replacing (before).
//
// Third argument is what you will be replacing the second argument with (after).
//
// NOTE: Preserve the case of the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"

// First passing attempt:
// function myReplace(str, before, after) {
//
//   function isCapitalized(str) {
//     return str[0] === str[0].toUpperCase();
//   }
//
//   function capitalize(str) {
//     return str.length ? str[0].toUpperCase() + str.slice(1).toLowerCase() : '';
//   }
//
//   if (isCapitalized(after)) {
//     before = capitalize(before);
//   }
//
//   let regex = new RegExp(before, 'i');
//   return str.replace(regex, after);
// }

// Refactor
function myReplace(str, before, after) {
  // seriously? js doesn't have a built in capitalize() function??
  function capitalize(str) {
    return str.length ? str[0].toUpperCase() + str.slice(1).toLowerCase() : '';
  }
  // if before string is capitalized, then capitalize the after string as well
  if (before[0] === before[0].toUpperCase()) {
    after = capitalize(after);
  }

  let regex = new RegExp(before, 'i');
  return str.replace(regex, after);
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

// Tests
// myReplace("Let us go to the store", "store", "mall") should return "Let us go to the mall".
// myReplace("He is Sleeping on the couch", "Sleeping", "sitting") should return "He is Sitting on the couch".
// myReplace("This has a spellngi error", "spellngi", "spelling") should return "This has a spelling error".
// myReplace("His name is Tom", "Tom", "john") should return "His name is John".
// myReplace("Let us get back to more Coding", "Coding", "algorithms") should return "Let us get back to more Algorithms".
