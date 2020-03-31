// var arr = [6, 10, 12, 14, 88, 81, 100, 56];
// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 != 0) {
//         console.log('有不是偶数的');

//         break;
//     }
// }
// if (i == arr.length) {
//     console.log('全部都是偶数');

// }


var arr = [6, 10, 12, 14, 88, 81, 100, 56];
var isAllEven = true;
for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
        isAllEven = false;
        break;
    }
}
if (isAllEven) {
    console.log('全偶数');

} else {
    console.log('有奇数');

}