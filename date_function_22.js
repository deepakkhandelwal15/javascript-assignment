function ISO_numeric_date(date) {
  return date.getDay() === 0 ? 7 : date.getDay();
}