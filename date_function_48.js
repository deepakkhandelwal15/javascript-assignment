function diff_months(dt1, dt2) {
  let years = dt2.getFullYear() - dt1.getFullYear();
  let months = dt2.getMonth() - dt1.getMonth();
  return years * 12 + months;
}