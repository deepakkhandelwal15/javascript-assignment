// 4. Search date in string (format DD/MM/YYYY or DD-MM-YYYY)
function findDate(str) {
  return str.match(/\b\d{2}[/-]\d{2}[/-]\d{4}\b/g);
}
console.log(findDate("Event is on 22/06/2025 and another on 01-01-2024"));