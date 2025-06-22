function ISO8601_week_no(date) {
  let target = new Date(date.valueOf());
  let dayNr = (date.getDay() + 6) % 7;
  target.setDate(target.getDate() - dayNr + 3);
  let jan4 = new Date(target.getFullYear(), 0, 4);
  let dayDiff = (target - jan4) / 86400000;
  return 1 + Math.floor(dayDiff / 7);
}