// 6. Word count with cleanup
function countWords(str) {
  return str.trim().replace(/\s+/g, ' ').split(' ').length;
}
console.log(countWords("  Hello     world from   JS "));