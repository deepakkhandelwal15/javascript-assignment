function internet_time(date) {
  let secs = date.getUTCHours() * 3600 + date.getUTCMinutes() * 60 + date.getUTCSeconds();
  return Math.floor((secs + 3600) / 86.4);
}