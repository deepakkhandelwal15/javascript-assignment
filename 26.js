function longestUniqueSubstring(s) {
    let start = 0, maxLength = 0, usedChar = {}, longest = "";
    for (let end = 0; end < s.length; end++) {
        const char = s[end];
        if (usedChar[char] >= start) {
            start = usedChar[char] + 1;
        }
        usedChar[char] = end;
        if (end - start + 1 > maxLength) {
            maxLength = end - start + 1;
            longest = s.substring(start, end + 1);
        }
    }
    return longest;
}
console.log(longestUniqueSubstring("abcabcbb")); // "abc"