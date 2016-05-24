// Title Case a Sentence
// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

// TESTS:
// titleCase("I'm a little tea pot") should return a string.
// titleCase("I'm a little tea pot") should return "I'm A Little Tea Pot".
// titleCase("sHoRt AnD sToUt") should return "Short And Stout".
// titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return "Here Is My Handle Here Is My Spout".


function titleCase(str) {
  var words = str.toLowerCase().split(' ');
  //console.log(words);
  var caps = words.map(function(word) {
    return word.charAt(0).toUpperCase() + word.substring(1, word.length);
  }).join(' ');

  return caps;
}

titleCase("I'm a little tea pot");




________________________________________________________________________________
// Spoiler Alert!
// Solution ahead!

// Code Solution 1:

String.prototype.replaceAt = function(index, character) {
    return this.substr(0, index) + character + this.substr(index+character.length);
};


function titleCase(str) {
    var newTitle = str.split(' ');
    var updatedTitle = [];
    for (var st in newTitle) {
        updatedTitle[st] = newTitle[st].toLowerCase().replaceAt(0, newTitle[st].charAt(0).toUpperCase());
    }
    return updatedTitle.join(' ');
}

// Code Explanation:
// We are modifying the replaceAt function using prototype to facilitate the use of the program.
// Split the string by whitespaces, and create a variable to track the updated title. Then we use a loop to turn turn the first character of the word to uppercase and the rest to lowercase. by creating concatenated string composed of the whole word in lowercase with the first character replaced by it’s uppercase.


// Second Solution:

function titleCase(str) {
  var convertToArray = str.toLowerCase().split(" ");
  var result = convertToArray.map(function(val){
      return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
  });
  return result.join(" ");
}

titleCase("I'm a little tea pot");

// Code Explanation:
// We are making entire string lowercase and then converting it into array. Then we are using map function to replace the lowercase character with uppercase. Finally, we are returning the string using join method.


// Third Solution:

function titleCase(str) {
  var newstr=str.toLowerCase().split(" ");
  for(var i=0;i<newstr.length;i++){
  var f=newstr[i].charAt(0);
 newstr[i]=newstr[i].replace(newstr[i].charAt(0),function replace(f){
   return f.toUpperCase();
 });

  }
  console.log(newstr);
  return newstr.join(" ");
}

titleCase("hello world");


// Fourth Solution:

function titleCase(str) {
  str = str.toLowerCase().split(' ');
  for (var i in str) {
    str[i] = str[i].replace(str[i].charAt(0), str[i].charAt(0).toUpperCase());
  };
  return str.join(' ');
}

titleCase("I'm a little tea pot", "");


// Fifth Solution:

function titleCase(str) {
  return str.replace(/\w\S*/g, function(word){
    return word.charAt(0).toUpperCase()+word.substr(1).toLowerCase();});
}

titleCase("I'm a little tea pot", "");
🚀 Run Code

// Sixth Solution:

function titleCase(str) {
  return str.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase());
}

// Code Explanation:
//
// Brief: The solution works by first lowercasing all the characters in the string and then only uppercasing the first character of each word.
//
// Detail:
//
// Lowercase the whole string using str.toLowerCase(). See [String.prototype.toLowerCase](http://devdocs.io#q=js+String+toLowe rCase)
//
// Replace every word’ first character to uppercase using .replace. See String.prototype.replace
//
// Search for words and a lowercase character at the beginning of each word i.e. matching any lowercase character following a space or matching the first character of the whole string, by using the following pattern.
//
// Regex explanation: See Regex Pattern
//
// ( |^) matches a space character or beginning of the whole string (^).
// [a-z] matches a single character in the range between a to z (case sensitive i.e. lowercase).
// The g modifier searches for other such word pattern in the whole string and replaces them.

// Credits:
//
// If you found this page useful, you can give thanks by copying and pasting this on the main chat: Thanks @Rafase282 @PoojaKumar @Hallaathrad @abhisekp @ksharifbd for your help with Algorithm: Title Case a Sentence
