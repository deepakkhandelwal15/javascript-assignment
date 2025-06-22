function string_endsWith(str, suffix) {
  return suffix ? str.endsWith(suffix) : false;
}
console.log(string_endsWith('JS PHP PYTHON','PYTHON'));
console.log(string_endsWith('JS PHP PYTHON',''));
