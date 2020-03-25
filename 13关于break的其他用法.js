// var n = 45887;
// var num = 0;
// for (var i = 1; i <= n; i++) {
//     if (n % i == 0) {
//         num++;
//     }
// }
// if (num == 2) {
//     console.log('OK');

// } else {
//     console.log('NO');

// }


// for (var i = 1; i <= 100; i++) {
//     var num = 0;
//     for (var j = 1; j <= i; j++) {
//         if (i % j == 0) {
//             num++;
//         }
//     }
//     if (num == 2) {
//         console.log(i);

//     }
// }

// for (var i = 1; i <= 100; i++) {
//     for (var j = 2; j <= i - 1; j++) {
//         if (i % j == 0) {
//             break;
//         }
//     }
//     if (j == i) {
//         console.log(i);

//     }
// }


var n = 45887;
for (var i = 2; i <= n - 1; i++) {
    if (n % i == 0) {
        break;
    }
}
if (i == n) {
    console.log('OK');

}