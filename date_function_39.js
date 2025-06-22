function diff_to_GMT(date) {
  let offset = -date.getTimezoneOffset();
  let hours = Math.floor(offset / 60);
  let mins = offset % 60;
  return (hours >= 0 ? '+' : '') + hours + '.' + (mins < 10 ? '0' : '') + mins;
}