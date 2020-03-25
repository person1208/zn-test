var arr = [3, 6, 8, 1, 12, 77, 45, 27, 28];
var arr1 = [];
for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        arr1.push(arr[i]);
    }
}
console.log(arr1.length, arr1);