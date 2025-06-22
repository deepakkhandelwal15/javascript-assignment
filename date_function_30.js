function lowercase_meridiem(date) {
  return date.getHours() < 12 ? 'am' : 'pm';
}