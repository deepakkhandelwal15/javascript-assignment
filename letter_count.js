
function countLetter(str, letter) {
    return str.split('').filter(l => l === letter).length;
}
console.log(countLetter('w3resource.com', 'o')); // 2
