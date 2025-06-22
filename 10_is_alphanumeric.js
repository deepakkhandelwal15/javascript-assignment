// 10. Check if alphanumeric
function isAlphaNumeric(str) {
  return /^[a-z0-9]+$/i.test(str);
}
console.log(isAlphaNumeric("Test123"));