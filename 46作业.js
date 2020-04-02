console.log(NaN == NaN); //false
console.log(NaN == undefined); //false
console.log(undefined == undefined); //true
console.log(null == undefined); //true
console.log("NaN" == NaN); //true         false
console.log(false == 0); //true
console.log(true == 1); //true
console.log(false == -1); //false
console.log(undefined == 0); //false
console.log(null == 0); //false
console.log("5" == 5); //true
console.log("5天" == 5); //false
console.log([] == true); //false
console.log([] == false); //true
console.log({} == true); //false
console.log({} == false); //true    false


// var a = 3;
// var b = 4;
// var c = a++ + b++ + ++a + ++b;
// //      4    5     5     6
// //      3    4    5      6
// console.log(c); //18



// var a = true;

// function fn() {
//     if (!a) {
//         var a = 10;
//     }
//     console.log(a);
// }
// fn(); //!!undefined 是false      //10


// var a = true;
// var b = false;

// function fn() {
//     if (a) { var a = 10; }
//     if (b) { var b = 20; }
//     console.log(a + b);
// }
// fn();
// //NaN


// function outer() {
//     var m = 100;

//     function inner() {
//         m += 10;
//         console.log(m);
//     }
//     return inner;
// }
// var i = outer();
// var j = outer();
// i(); //110
// i(); //120
// j(); //110


// function fo() {
//     var i = 0;
//     return function(n) {
//         return n + i++;
//     }
// }

// var f = fo();
// var a = f(15);
// var b = fo()(15);
// var c = fo()(20);
// var d = f(20);

// console.log(a); //15
// console.log(b); //15
// console.log(c); //20
// console.log(d); //21


var fun = function() {
    console.log("A");
}

function fun() {
    console.log("B");
}
fun(); //A