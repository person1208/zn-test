// var arr = [-2, 2, -3, 4, -1, 2, 1, -5];
// max = -2;
// var max_i = 0;
// var max_j = 0;
// for (var i = 0; i < arr.length; i++) {
//     sum = 0;
//     for (var j = i; j < arr.length; j++) {
//         sum += arr[j];
//         if (sum > max) {
//             max = sum;
//             max_i = i;
//             max_j = j;
//         }

//     }

// }
// console.log(arr.slice(max_i, max_j + 1));


var arr = [-2, 2, -3, 4, -1, 2, 1, -5];
var max = -2;
var max_i = 0;
var max_j = 0;
for (var i = 0; i < arr.length; i++) {
    for (var j = i; j < arr.length; j++) {
        var sum = 0;
        for (var k = i; k <= j; k++) {
            sum += arr[k];
            if (sum > max) {
                max = sum;
                max_i = i;
                max_j = j;
            }
        }
    }
}
console.log(arr.slice(max_i, max_j + 1));