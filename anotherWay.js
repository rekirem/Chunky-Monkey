function chunkArrayInGroups(arr, size) {
    let arr2 = [];
    let arr3 = [];
    let exit =false;
        while (!exit) {
            if (size >= arr.length) {
                size = arr.length;
                exit = true;
            }
            for (let i = 0; i < size; i++) {
                arr2.push(arr.shift());
            }
            arr3.push(arr2);
            arr2 = [];
        }
        return arr3;
}
