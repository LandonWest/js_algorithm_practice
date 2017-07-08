// Missing letters
// Find the missing letter in the passed letter range and return it.
// If all letters are present in the range, return undefined.

function fearNotLetter(str) {

  for (let i = 0; i < str.length; i++) {
    let current = str.charCodeAt(i);

    if (str.charCodeAt(0) + i !== current) {
      return String.fromCharCode(current -1);
    }
  }

  return undefined;
}

// Tests:
// fearNotLetter("abce") should return "d".
// fearNotLetter("abcdefghjklmno") should return "i".
// fearNotLetter("bcd") should return undefined.
// fearNotLetter("yz") should return undefined.
