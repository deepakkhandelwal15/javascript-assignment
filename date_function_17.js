function unix_to_time(timestamp) {
  let date = new Date(timestamp * 1000);
  return date.toLocaleTimeString();
}