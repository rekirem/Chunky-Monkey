function chunkArrayInGroups(arr, size) {
    let arr2 = [];
    let arr3;
    for (let i = 0; i < arr.length; i += size) {
        arr3 = arr.slice(i, i + size); //Got the needed sub array
        arr2.push(arr3); //Push that subarray
    }
    return arr2;
}
