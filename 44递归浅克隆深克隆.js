// function digui(n) {
//     if (n == 1) return 1;
//     return n * digui(n - 1)
// }
// console.log(digui(3));
// console.log(digui(4));

// console.log(digui(5));

// var arr = [12, 11, 45, 89, 98, 77];
// var arr1 = [];
// for (var i = 0; i < arr.length; i++) {
//     arr1.push(arr[i]);
// }
// console.log(arr1);


// var obj = { a: 1, b: 2 };
// var obj1 = {};
// for (var k in obj) {
//     obj1[k] = obj[k]
// }
// obj.a++;
// console.log(obj, obj1);


// var arr1 = [1, 2, 3, 4, { 'm': 6, 'n': [1, 2, 3] }];

// function deepClone(o) {
//     if (Array.isArray(o)) {
//         var result = [];
//         for (var i = 0; i < o.length; i++) {
//             result.push(deepClone(o[i]));
//         }
//     } else if (typeof o == 'object') {
//         var result = {};
//         for (var k in o) {
//             result[k] = deepClone(o[k]);
//         }
//     } else {
//         result = o;
//     }
//     return result;
// }

// console.log(deepClone(arr1));



// var arr1 = [1, 2, 3, 4, { 'm': 6, 'n': [1, 2, 3] }];

// function deepClone(n) {
//     if (Array.isArray(n)) {
//         var result = [];
//         for (var i = 0; i < n.length; i++) {
//             result.push(deepClone(n[i]));
//         }
//     } else if (typeof n == 'object') {
//         var result = {};
//         for (var k in n) {
//             result[k] = deepClone(n[k]);
//         }
//     } else {
//         result = n;
//     }
//     return result;
// }

// console.log(deepClone(arr1));



function fib(n) {
    if (n == 0 || n == 1) return 1;
    return fib(n - 1) + fib(n - 2);
}
for (var i = 0; i <= 10; i++) {
    console.log(fib(i));
}




// function lib(n) {
//     if (n == 0 || n == 1) return 1;
//     return lib(n - 1) + lib(n - 2);
// }
// for (var i = 0; i < 10; i++) {
//     console.log(lib(i));

// }