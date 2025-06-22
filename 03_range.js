function range(x, y) {
    if (y - x <= 1) return [];
    return [x + 1].concat(range(x + 1, y));
}
console.log(range(2, 9)); // [3, 4, 5, 6, 7, 8]