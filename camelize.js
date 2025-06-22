function camelize(str) {
  return str.replace(/(?:^|\s|_)(\w)/g, (_, c) => c ? c.toUpperCase() : '');
}
console.log(camelize("JavaScript Exercises"));
console.log(camelize("JavaScript exercises"));
console.log(camelize("JavaScriptExercises"));
