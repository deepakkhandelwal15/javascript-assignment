function date_diff_indays(date1, date2) {
  let dt1 = new Date(date1);
  let dt2 = new Date(date2);
  return Math.floor((dt2 - dt1) / (1000 * 60 * 60 * 24));
}