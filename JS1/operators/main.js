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
var r = 6 && 0 && 7;
console.log(r); //0

var r = -9 && -8;
console.log(r); //-8

var r = 6 && 0 && 7;
console.log(r); //0

var r = "string" && 0;
console.log(r); //0

var r = [] && {} && 7;
console.log(r); //7

var r = [] || 7;
console.log(r); // []

var r = {} || 0;
console.log(r); // {}

var r = false || true;
console.log(r); //true

var r = "2" > "3";
console.log(r); //false

var r = "ab" <= "fg";
console.log(r); //true

var r = "2k" <= "8l";
console.log(r); //true

var r = "2" != 2;
console.log(r); //false

var r = "2" !== 2;
console.log(r); //true

var r = ++2 + 2;
console.log(r); //5

var r = ++2 + 2--;
console.log(r); //5

var r = 1++ - 2--;
console.log(r); //-1