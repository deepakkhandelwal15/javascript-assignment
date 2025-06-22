// 2. Validate credit card number (simple Luhn check not included)
function isValidCreditCard(number) {
  return /^(\d{4}[- ]?){3}\d{4}$/.test(number);
}
console.log(isValidCreditCard("1234-5678-9012-3456"));