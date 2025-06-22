function count(mainStr, subStr, caseSensitive = true) {
  const regex = new RegExp(subStr, caseSensitive ? 'g' : 'gi');
  return (mainStr.match(regex) || []).length;
}
console.log(count("The quick brown fox jumps over the lazy dog", 'the'));
console.log(count("The quick brown fox jumps over the lazy dog", 'fox',false));
