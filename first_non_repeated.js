
function firstNonRepeated(str) {
    for (let char of str) {
        if (str.indexOf(char) === str.lastIndexOf(char)) {
            return char;
        }
    }
    return null;
}
console.log(firstNonRepeated('abacddbec')); // 'e'
