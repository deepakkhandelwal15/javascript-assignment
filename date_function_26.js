function numeric_month(date) {
  return ('0' + (date.getMonth() + 1)).slice(-2);
}