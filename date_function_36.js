function seconds_with_leading_zeros(date) {
  return ('0' + date.getSeconds()).slice(-2);
}