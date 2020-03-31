// var arr = [1, 2, 4, -3, 2, 3, 1, -4, -2, 2, 4, -5];
// for (var i = 0; i < arr.length - 2; i++) {
//     if (arr[i] + arr[i + 1] + arr[i + 2] == 0) {
//         console.log(arr[i], arr[i + 1], arr[i + 2]);
//     }
// }

var arr = [1, 2, 4, -3, 2, 3, 1, -4, -2, 2, 4, -5];
for (var i = 0; i < arr.length - 2; i++) {
    var sum = 0;
    for (var j = 0; j < 3; j++) {
        sum += arr[i + j]
    }

    if (sum == 0) {
        var str = '';
        for (var j = 0; j < 3; j++) {
            str += arr[i + j] + ' ';
        }
        console.log(str);

    }
}