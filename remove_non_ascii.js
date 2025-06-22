function remove_non_ascii(str) {
  return str.replace(/[^ -~]/g, '');
}
console.log(remove_non_ascii('äÄçÇéÉêPHP-MySQLöÖÐþúÚ'));
