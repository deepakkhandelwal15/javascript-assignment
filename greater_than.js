
function filterGreaterThan(arr, n) {
    return arr.filter(x => x > n);
}
console.log(filterGreaterThan([1, 5, 10, 15], 6)); // [10, 15]
