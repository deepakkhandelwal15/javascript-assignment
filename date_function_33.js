function hours_with_zeroes(date) {
  let h = date.getHours() % 12 || 12;
  return ('0' + h).slice(-2);
}