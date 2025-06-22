// 16. Check for hexadecimal value
function isHexadecimal(str) {
  return /^[0-9A-Fa-f]+$/.test(str);
}
console.log(isHexadecimal("1A3F"));