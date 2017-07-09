// Spinal Tap Case
// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

// First passing attempt:
function spinalCase(str) {
  return str.replace(/\s|_/g, '-')
            .replace(/([a-z])([A-Z])/g, '$1-$2')
            .toLowerCase();
}

// example from fcc forum (slightly slower than my solution though...)
function spinalCase(str) {
  return str.split(/\s|_|(?=[A-Z])/).join('-').toLowerCase()
}

// Tests:
// spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap".
// spinalCase("thisIsSpinalTap") should return "this-is-spinal-tap".
// spinalCase("The_Andy_Griffith_Show") should return "the-andy-griffith-show".
// spinalCase("Teletubbies say Eh-oh") should return "teletubbies-say-eh-oh".
// spinalCase("AllThe-small Things") should return "all-the-small-things".
