function hex_to_ascii(hex) {
  return hex.match(/.{1,2}/g).map(h => String.fromCharCode(parseInt(h, 16))).join('');
}
console.log(hex_to_ascii('3132'));
console.log(hex_to_ascii('313030'));
