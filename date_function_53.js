function month_end(date) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0);
}