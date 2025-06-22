// 7. Check if value is IP address
function isValidIP(ip) {
  return /^(25[0-5]|2[0-4]\d|1?\d?\d)(\.(?!$)|$){4}$/.test(ip);
}
console.log(isValidIP("192.168.0.1"));