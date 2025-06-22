function yesterday(dateStr) {
  let dt = new Date(dateStr);
  dt.setDate(dt.getDate() - 1);
  return dt;
}