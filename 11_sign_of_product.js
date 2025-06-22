function signOfProduct(x, y, z) {
    const product = x * y * z;
    return product >= 0 ? "+" : "-";
}
console.log(signOfProduct(3, -7, 2)); // "-"