// 18. Validate domain name
function isValidDomain(str) {
  return /^(?!-)[A-Za-z0-9-]{1,63}(?<!-)\.[A-Za-z]{2,6}$/.test(str);
}
console.log(isValidDomain("example.com"));