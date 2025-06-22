function sentenceCase(str) {
  return str.replace(/\w[^.?!]*[.?!]/g, sentence =>
    sentence.charAt(0).toUpperCase() + sentence.slice(1).toLowerCase());
}
console.log(sentenceCase('PHP exercises. python exercises.'));
