function isHappy(n) {
    const seen = new Set();
    while (n !== 1 && !seen.has(n)) {
        seen.add(n);
        n = [...String(n)].reduce((sum, d) => sum + Math.pow(Number(d), 2), 0);
    }
    return n === 1;
}
let count = 0, num = 1;
while (count < 5) {
    if (isHappy(num)) {
        console.log(num);
        count++;
    }
    num++;
}