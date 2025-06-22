function days_passed(date) {
  let start = new Date(date.getFullYear(), 0, 1);
  let diff = date - start;
  return Math.floor(diff / (1000 * 60 * 60 * 24));
}