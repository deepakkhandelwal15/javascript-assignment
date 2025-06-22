function short_months(date) {
  return date.toLocaleString('default', { month: 'short' });
}