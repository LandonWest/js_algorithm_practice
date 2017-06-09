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
        console.log(num);
        break;
      case num >= 900 && num < 1000:
        roman = roman.concat('CM');
        num -= 900;
        console.log(num);
        break;
      case num >= 500 && num < 900:
        roman = roman.concat('D');
        num -= 500;
        console.log(num);
        break;
      case num >= 100 && num < 500:
        roman = roman.concat('C');
        num -= 100;
        console.log(num);
        break;
      case num >= 90 && num < 100:
        roman = roman.concat('XC');
        num -= 90;
        console.log(num);
        break;
      case num >= 50 && num < 90:
        roman = roman.concat('L');
        num -= 50;
        console.log(num);
        break;
      case num >= 40 && num < 50:
        roman = roman.concat('XL');
        num -= 40;
        console.log(num);
        break;
      case num >= 10 && num < 40:
        roman = roman.concat('X');
        num -= 10;
        console.log(num);
        break;
      case num === 9:
        roman = roman.concat('IX');
        num -= 9;
        console.log(num);
        break;
      case num >= 5 && num < 9:
        roman = roman.concat('V');
        num -= 5;
        console.log(num);
        break;
      case num === 4:
        roman = roman.concat('IV');
        num -= 4;
        console.log(num);
        break;
      case num > 0 && num < 4:
        roman = roman.concat('I');
        num -= 1;
        console.log(num);
        break;
    }
  }

  return roman;
}
