// 9. Validate URL
function isValidURL(str) {
  const pattern = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/\S*)?$/;
  return pattern.test(str);
}
console.log(isValidURL("https://www.example.com"));