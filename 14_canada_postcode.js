// 14. Validate Canada Post Code
function isValidCanadaPostcode(str) {
  return /^[A-Z]\d[A-Z] ?\d[A-Z]\d$/i.test(str);
}
console.log(isValidCanadaPostcode("K1A 0B1"));