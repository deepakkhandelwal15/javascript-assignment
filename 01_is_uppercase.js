// 1. Check if first character is uppercase
function isFirstCharUpperCase(str) {
  return /^[A-Z]/.test(str);
}
console.log(isFirstCharUpperCase("Hello"));
console.log(isFirstCharUpperCase("hello"));