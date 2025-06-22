function uppercase_meridiem(date) {
  return date.getHours() < 12 ? 'AM' : 'PM';
}