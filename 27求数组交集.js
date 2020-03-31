// var arr = [1, 3, 8, 10, 12];
// var arr1 = [4, 2, 10, 1, 3, 9, 17, 3];
// var arr2 = [];
// for (var i = 0; i < arr.length; i++) {
//     for (var j = 0; j < arr1.length; j++) {
//         if (arr[i] == arr1[j] && !arr2.includes(arr[i])) {
//             arr2.push(arr[i])

//         }
//     }
// }
// console.log(arr2);

var arr = [1, 3, 8, 10, 12];
var arr1 = [4, 2, 10, 1, 3, 9, 17, 3];
var result_arr = [];
for (var i = 0; i < arr.length; i++) {
    if (arr1.includes(arr[i])) {
        result_arr.push(arr[i]);
    }
}
console.log(result_arr);