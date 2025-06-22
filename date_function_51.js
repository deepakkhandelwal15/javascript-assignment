function week_end(date) {
  let d = new Date(date);
  let day = d.getDay() || 7;
  if (day !== 7) d.setHours(24 * (7 - day));
  return d;
}