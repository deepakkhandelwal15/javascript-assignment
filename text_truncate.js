function text_truncate(str, length = str.length, ending = '...') {
  return str.length > length ? str.substring(0, length - ending.length) + ending : str;
}
console.log(text_truncate('We are doing JS string exercises.'));
console.log(text_truncate('We are doing JS string exercises.',19));
console.log(text_truncate('We are doing JS string exercises.',15,'!!'));
