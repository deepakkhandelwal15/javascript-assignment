// 13. Validate UK Postcode
function isValidUKPostcode(str) {
  return /^[A-Z]{1,2}\d[A-Z\d]? ?\d[A-Z]{2}$/i.test(str);
}
console.log(isValidUKPostcode("SW1A 1AA"));