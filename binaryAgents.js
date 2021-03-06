// Binary Agents
//
// Return an English translated sentence of the passed binary string.
// The binary string will be space separated.

// First passing test
function binaryAgent(str) {
  return str.split(' ').map(bin => {
    return String.fromCharCode(convertBin(bin));
  }).join('');

  function convertBin(num) {
    const arr = num.split('').reverse();
    let sum = 0;
    for (let i=0; i < arr.length; i++) {
      sum += (arr[i] * Math.pow(2, i));
    }
    return sum;
  }
}

// Second passing test after I figured out there's already a method for binary/base10 conversion :D
function binaryAgent(str) {
  return str.split(' ').map(bin => {
    return String.fromCharCode(parseInt(bin, 2));
  }).join('');
}

// Tests:
// binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111") should return "Aren't bonfires fun!?"
// binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001") should return "I love FreeCodeCamp!"
