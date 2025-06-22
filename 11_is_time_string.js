// 11. Check if time string HH:MM 24-hour format
function isTimeString(str) {
  return /^([01]\d|2[0-3]):([0-5]\d)$/.test(str);
}
console.log(isTimeString("23:45"));