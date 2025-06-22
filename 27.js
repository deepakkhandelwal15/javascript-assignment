function longestPalindrome(s) {
    let result = "";
    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            let substr = s.substring(i, j + 1);
            if (substr === substr.split('').reverse().join('') && substr.length > result.length) {
                result = substr;
            }
        }
    }
    return result;
}
console.log(longestPalindrome("bananas")); // "anana"