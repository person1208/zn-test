var  arr  =   [33,  22,  11,  4,  8];
// var temp = 0;
// for (var i = 0; i < arr.length - 1; i++) {
//     for (var j = 0; j < arr.length - 1 - i; j++) {
//         if (arr[j] > arr[j + 1]) {
//             temp = arr[j];
//             arr[j] = arr[j + 1];
//             arr[j + 1] = temp;
//         }
//     }

// }
// console.log(arr);

arr.sort(function(a, b) {
    return a - b;
});
console.log(arr);