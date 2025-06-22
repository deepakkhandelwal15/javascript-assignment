// 12. Validate US Zip Code
function isValidUSZip(str) {
  return /^\d{5}(-\d{4})?$/.test(str);
}
console.log(isValidUSZip("12345-6789"));