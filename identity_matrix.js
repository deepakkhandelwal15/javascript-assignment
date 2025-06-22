
function identityMatrix(n) {
    let matrix = [];
    for (let i = 0; i < n; i++) {
        let row = Array(n).fill(0);
        row[i] = 1;
        matrix.push(row);
    }
    return matrix;
}
console.log(identityMatrix(3));
