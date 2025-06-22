function diff_days(dt1, dt2) {
  return Math.floor((dt2 - dt1) / (1000 * 60 * 60 * 24));
}