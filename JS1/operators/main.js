// 1 task
var r = '9' + 0;
console.log(r);// 90
console.log(typeof r);// string

var r = 9 + '0';
console.log(r);// 90
console.log(typeof r);// string

var r = 4 + 9;
console.log(r); //13
console.log(typeof r); //number

var r = null + 7;
console.log(r); //7
console.log(typeof r); //number

var r = '6' + null;
console.log(r); //6null
console.log(typeof r); //string

var r = '6' + [];
console.log(r); //6
console.log(typeof r); //string

var r = '6' + null;
console.log(r); //6null
console.log(typeof r); //string

// 2 task
console.log(2/3 + 1 + 1/3 == 2); //false

/*В дробах 1/3, 2/3 буде нескінченна частка в системі подвійних чисел.*/

// 3 task
var r = 6 && 0 && 7; // 0
console.log(r);
var r = -9 && -8; // -8
console.log(r);
var r = 6 && 0 && 7; // 0
console.log(r);
var r = "string" && 0; // 0
console.log(r);
var r = [] && {} && 7; // 7
console.log(r);
var r = [] || 7; // []
console.log(r);
var r = {} || 0; // {}
console.log(r);
var r = false || true; // true
console.log(r);
var r = "2" > "3"; // false
console.log(r);
var r = "ab" <= "fg"; // true
console.log(r);
var r = "2k" <= "8l"; //true
console.log(r);
var r = "2" != 2; // false
console.log(r);
var r = "2" !== 2; // true
console.log(r);
var r = ++2 + 2; // 5
console.log(r);
var r = ++2 + 2--; // 5
console.log(r);
var r = 1++ - 2--; // -1
console.log(r);