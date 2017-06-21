// Pig Latin
// Translate the provided string to pig latin.
// Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".
// If a word begins with a vowel you just add "way" to the end.
// Input strings are guaranteed to be English words in all lowercase.
// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

// First passing attempt
function translatePigLatin(str) {

  function isVowel(char) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return vowels.includes(char.toLowerCase());
  }

  if (isVowel(str[0])) {
    return str.concat('way');
    // else if second char in string is Not a vowel
  } else if (!isVowel(str[1])) {
    console.log('must be two consonants...');
    let prefix = str.substr(0,2);
    return str.slice(2).concat(prefix + 'ay');
  } else {
    console.log('must only be one consonant');
    let sing = str[0];
    return str.slice(1).concat(sing + 'ay');
  }
}

// Refactor
function translatePigLatin(str) {
  const vowel = /[aeiou]/i;

  if (vowel.test(str[0])) {
    return str.concat('way');
  }
  // if second char is not a vowel
  return !vowel.test(str[1]) ?
    str.slice(2).concat(str.substr(0,2) + 'ay') :
    str.slice(1).concat(str[0] + 'ay');
}
