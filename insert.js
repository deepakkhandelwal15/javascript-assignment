function insert(mainStr, insStr = '', pos = 0) {
  return mainStr.slice(0, pos) + insStr + mainStr.slice(pos);
}
console.log(insert('We are doing some exercises.'));
console.log(insert('We are doing some exercises.','JavaScript '));
console.log(insert('We are doing some exercises.','JavaScript ',18));
