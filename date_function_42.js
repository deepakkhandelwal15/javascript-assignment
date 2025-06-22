function add_weeks(date, weeks) {
  date.setDate(date.getDate() + weeks * 7);
  return date;
}