
function charCount(str) {
    let result = {};
    for (let char of str) {
        result[char] = (result[char] || 0) + 1;
    }
    return result;
}
console.log(charCount('hello world'));
