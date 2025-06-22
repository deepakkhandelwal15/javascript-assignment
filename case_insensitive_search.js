function case_insensitive_search(str, search) {
  return str.toLowerCase().includes(search.toLowerCase()) ? "Matched" : "Not Matched";
}
console.log(case_insensitive_search('JavaScript Exercises', 'exercises'));
console.log(case_insensitive_search('JavaScript Exercises', 'Exercises'));
console.log(case_insensitive_search('JavaScript Exercises', 'Exercisess'));
