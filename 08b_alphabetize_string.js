// Extra: Alphabetize string
function alphabetize_string(str) {
  return str.replace(/[^a-z]/gi, '').split('').sort().join('');
}
console.log(alphabetize_string('United States'));