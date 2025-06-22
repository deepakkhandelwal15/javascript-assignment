// 17. Check for hex color
function isHexColor(str) {
  return /^#?([0-9A-F]{3}|[0-9A-F]{6})$/i.test(str);
}
console.log(isHexColor("#FFA07A"));