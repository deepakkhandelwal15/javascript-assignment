function remove_first_occurrence(str, searchStr) {
  return str.replace(searchStr, '');
}
console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the'));
