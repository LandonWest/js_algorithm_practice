// Convert HTML Entities
// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a
// string to their corresponding HTML entities.

// First passing attempt:
function convertHTML(str) {
  return str.replace(/&/g, '&amp;')
            .replace(/>/g, '&gt;')
            .replace(/</g, '&lt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&apos;');
}

// Second passing attempt w/ hints from fcc (this happens to be slower than previous solution)
function convertHTML(str) {
  const map = {
    '&': '&amp;',
    '>': '&gt;',
    '<': '&lt;',
    '\"': '&quote;',
    '\'': '&apos;'
  }

  return str.split('').map(char => {
    return map[char] || char;
  }).join('');
}

// Tests:
// convertHTML("Dolce & Gabbana") should return Dolce &​amp; Gabbana.
// convertHTML("Hamburgers < Pizza < Tacos") should return Hamburgers &​lt; Pizza &​lt; Tacos.
// convertHTML("Sixty > twelve") should return Sixty &​gt; twelve.
// convertHTML('Stuff in "quotation marks"') should return Stuff in &​quot;quotation marks&​quot;.
// convertHTML("Shindler's List") should return Shindler&​apos;s List.
// convertHTML("<>") should return &​lt;&​gt;.
// convertHTML("abc") should return abc.
