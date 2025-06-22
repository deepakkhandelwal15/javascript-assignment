
function getCombinations(arr, length) {
    let result = [];
    function combine(start, combo) {
        if (combo.length === length) {
            result.push([...combo]);
            return;
        }
        for (let i = start; i < arr.length; i++) {
            combo.push(arr[i]);
            combine(i + 1, combo);
            combo.pop();
        }
    }
    combine(0, []);
    return result;
}
console.log(getCombinations([1, 2, 3], 2));
