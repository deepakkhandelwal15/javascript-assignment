// 5. Trim function using regex
function customTrim(str) {
  return str.replace(/^\s+|\s+$/g, '');
}
console.log(customTrim("   Hello World   "));