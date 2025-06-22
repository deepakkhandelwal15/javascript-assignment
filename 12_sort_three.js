function sortThree(a, b, c) {
    const sorted = [a, b, c].sort((x, y) => y - x);
    alert(sorted.join(", "));
}
sortThree(0, -1, 4);