function compare_dates(date1, date2) {
  if (date1.getTime() > date2.getTime()) return "Date1 > Date2";
  else if (date1.getTime() < date2.getTime()) return "Date2 > Date1";
  else return "Date1 = Date2";
}