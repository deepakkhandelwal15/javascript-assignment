// 20. Check for alpha, dash, underscore
function isAlphaDashUnderscore(str) {
  return /^[a-zA-Z_-]+$/.test(str);
}
console.log(isAlphaDashUnderscore("test-Case_123"));