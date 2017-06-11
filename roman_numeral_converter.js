// Convert the given number into a roman numeral.
// All roman numerals answers should be provided in upper-case.

// First Attempt
function convertToRoman(num) {
  let roman = '';

  while (num > 0) {
    switch (true) {
      case num >= 1000 && num < 4000:
        roman = roman.concat('M');
        num -= 1000;
        break;
      case num >= 900 && num < 1000:
        roman = roman.concat('CM');
        num -= 900;
        break;
      case num >= 500 && num < 900:
        roman = roman.concat('D');
        num -= 500;
        break;
      case num >= 100 && num < 500:
        roman = roman.concat('C');
        num -= 100;
        break;
      case num >= 90 && num < 100:
        roman = roman.concat('XC');
        num -= 90;
        break;
      case num >= 50 && num < 90:
        roman = roman.concat('L');
        num -= 50;
        break;
      case num >= 40 && num < 50:
        roman = roman.concat('XL');
        num -= 40;
        break;
      case num >= 10 && num < 40:
        roman = roman.concat('X');
        num -= 10;
        break;
      case num === 9:
        roman = roman.concat('IX');
        num -= 9;
        break;
      case num >= 5 && num < 9:
        roman = roman.concat('V');
        num -= 5;
        break;
      case num === 4:
        roman = roman.concat('IV');
        num -= 4;
        break;
      case num > 0 && num < 4:
        roman = roman.concat('I');
        num -= 1;
        break;
    }
  }

  return roman;
}

// Second Attempt:
function convertToRoman(num) {
  const map = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };

  let roman = '';

  for (let prop in map) {
    while (num >= map[prop]) {
      roman += prop;
      num -= map[prop];
    }
  }

  return roman;
}

// TESTS:
// convertToRoman(2) should return "II".
// convertToRoman(3) should return "III".
// convertToRoman(4) should return "IV".
// convertToRoman(5) should return "V".
// convertToRoman(9) should return "IX".
// convertToRoman(12) should return "XII".
// convertToRoman(16) should return "XVI".
// convertToRoman(29) should return "XXIX".
// convertToRoman(44) should return "XLIV".
// convertToRoman(45) should return "XLV"
// convertToRoman(68) should return "LXVIII"
// convertToRoman(83) should return "LXXXIII"
// convertToRoman(97) should return "XCVII"
// convertToRoman(99) should return "XCIX"
// convertToRoman(500) should return "D"
// convertToRoman(501) should return "DI"
// convertToRoman(649) should return "DCXLIX"
// convertToRoman(798) should return "DCCXCVIII"
// convertToRoman(891) should return "DCCCXCI"
// convertToRoman(1000) should return "M"
// convertToRoman(1004) should return "MIV"
// convertToRoman(1006) should return "MVI"
// convertToRoman(1023) should return "MXXIII"
// convertToRoman(2014) should return "MMXIV"
// convertToRoman(3999) should return "MMMCMXCIX"
