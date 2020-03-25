var arr = [3, 6, 8, 1, 12, 77, 45, 27];
var max = arr[0];
for (var i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}
console.log(max);