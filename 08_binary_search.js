function binarySearch(arr, x, start = 0, end = arr.length - 1) {
    if (start > end) return -1;
    const mid = Math.floor((start + end) / 2);
    if (arr[mid] === x) return mid;
    return x < arr[mid]
        ? binarySearch(arr, x, start, mid - 1)
        : binarySearch(arr, x, mid + 1, end);
}
console.log(binarySearch([0, 1, 2, 3, 4, 5, 6], 5)); // 5