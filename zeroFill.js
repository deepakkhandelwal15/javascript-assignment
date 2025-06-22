function zeroFill(number, width, sign = '+') {
  const absNum = Math.abs(number).toString().padStart(width, '0');
  return (sign === '-' && number >= 0 ? '+' : '') + absNum;
}
console.log(zeroFill(120, 5, '-'));
console.log(zeroFill(29, 4));
