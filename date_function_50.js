function week_start(date) {
  let d = new Date(date);
  let day = d.getDay() || 7;
  if (day !== 1) d.setHours(-24 * (day - 1));
  return d;
}