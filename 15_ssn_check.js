// 15. Validate US SSN
function isValidSSN(str) {
  return /^\d{3}-\d{2}-\d{4}$/.test(str);
}
console.log(isValidSSN("123-45-6789"));