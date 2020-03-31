// var arr = [1, 3, 4, 5, 3, 5, 4, 3, 1];
// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] == arr[arr.length - 1 - i]) {
//         console.log('对称');

//     }
// }

var arr = [1, 3, 4, 5, 3, 5, 4, 3, 1];
var flag = true;
for (var i = 0; i < arr.length / 2; i++) {
    if (arr[i] != arr[arr.length - 1 - i]) {
        flag = false;
        break;
    }
}
if (flag) {
    console.log('对称');

} else {
    console.log('不对称');

}