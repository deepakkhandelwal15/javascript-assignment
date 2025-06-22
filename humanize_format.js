function humanize_format(num) {
  if (typeof num !== 'number') return;
  const suffixes = ["th", "st", "nd", "rd"],
        v = num % 100;
  return num + (suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0]);
}
console.log(humanize_format(1));
console.log(humanize_format(8));
console.log(humanize_format(301));
console.log(humanize_format(402));
