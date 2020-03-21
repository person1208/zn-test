// var sum = 0;
// for (var i = 1; i <= 100; i++) {
//     sum += i;
// }
// console.log(sum);

// var result = 1;
// for (var i = 1; i <= 6; i++) {
//     result *= i;
// }
// console.log(result);

// for (var i = 1; i <= 3; i++) {
//     for (var j = 1; j <= 4; j++) {
//         console.log('第' + i + '天吃了' + j + '个包子')
//     }
//     console.log('哇，好撑啊');
// }

// for (var i = 1; i <= 9; i++) {
//     var str = '';
//     for (var j = 1; j <= 9; j++) {
//         str += i + '*' + j + '=' + j * i + ' ';
//     }
//     console.log(str);
// }

// for (var i = 1; i <= 48; i++) {
//     if (48 % i == 0) {
//         console.log(i);
//     }
// }

// for (var i = 100; i <= 999; i++) {
//     var g = i % 10;
//     var s = parseInt(i / 10) % 10;
//     var b = parseInt(i / 100);
//     var num = Math.pow(g, 3) + Math.pow(s, 3) + Math.pow(b, 3);
//     if (i == num) {
//         console.log(i);
//     }
// }

// var total = 0;
// for (var i = 1; i <= 9; i++) {
//     total += i / (i + 1);
// }
// console.log(total);

// var tu = 0;
// for (var ji = 1; ji <= 35; ji++) {
//     tu = 35 - ji;
//     if (ji * 2 + tu * 4 == 94) {
//         console.log(`鸡一共${ji}只，兔一共${tu}只`)
//     }
// }

// for (var i = 2; i <= 10000; i++) {
//     var str = 0;
//     for (var j = 1; j < i; j++) {
//         if (i % j == 0) {
//             str += j;

//         }
//     }
//     if (str == i) {
//         console.log(i)
//     }
// }

// for (var i = 2; i <= 10000; i++) {
//     var str = 0;
//     for (var j = 1; j < i; j++) {
//         if (i % j == 0) {
//             str += j;
//         }
//     }
//     if (str == i) {
//         console.log(i)
//     }
// }
for (var i = 2; i <= 10000; i++) {
    var str = 0;
    for (var j = 1; j < i; j++) {
        if (i % j == 0) {
            str += j;
        }
    }
    if (str == i) {
        console.log(i);
    }
}

// for(){}