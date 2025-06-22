// 19. Check if HTML
function isHTML(str) {
  return /<("[^"]*"|'[^']*'|[^'">])*>/.test(str);
}
console.log(isHTML("<div>Hello</div>"));