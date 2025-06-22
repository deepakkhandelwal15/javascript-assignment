function is_weekend(dateString) {
  let day = new Date(dateString).getDay();
  return (day === 0 || day === 6) ? "weekend" : undefined;
}