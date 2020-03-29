var arr = [39, 45, 42, 44, 51, 48];
var sum = 0;
var max = arr[0];
var min = arr[0];
for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (max < arr[i + 1]) {
        max = arr[i + 1];
    }
    if (min > arr[i + 1]) {
        min = arr[i + 1];
    }
}
var e = (sum - min - max) / 4
console.log(e);