
function isPalindrome(str) {
    var cleaned = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    return cleaned === cleaned.split('').reverse().join('');
}
console.log(isPalindrome('madam')); // true
console.log(isPalindrome('nurses run')); // true
