function compare_strings(str1, str2) {
  return str1.toLowerCase() === str2.toLowerCase();
}
console.log(compare_strings('abcd', 'AbcD'));
console.log(compare_strings('ABCD', 'Abce'));
