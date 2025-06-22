function minutes_with_leading_zeros(date) {
  return ('0' + date.getMinutes()).slice(-2);
}