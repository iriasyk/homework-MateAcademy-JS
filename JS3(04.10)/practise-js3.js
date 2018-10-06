// Task 1
myname = "global";
function func() {
    console.log(myname); //undefined
    var myname = "local";
    console.log(myname); //local
}
func(); //undefined

// Task 2
var a = 90100;
function someFunc(){
    if(false){
        var a = 1;
    } else {
        var b = 2;
    }
    console.log(b); //2
    console.log(a); //undefined
}
someFunc(); //undefined

// Task 3
a(); //ok
b(); //error.Почему?: Потому, что функция вызываеться до обьявления.

var b = function(){
    alert( 'function b');
}

function a(){
    alert( 'function a' );
}

//Task 4
var i = 0;

for (; i< 10; i ++) {
    console.log(i) //undefined
}

//Task 5 (Напишите функцию подсчета факториала числа, но каждый раз возвращая факториал умножайте его на 2 если число четное.)

function factorial(x){
    if(x == 0){
        return 1;
    }
    return x*factorial(x-1);
}
var i = prompt("Введите число:");
alert(i);
//
// var f = [];
// function factorial (n) {
//     if (n == 0 || n == 1)
//         return 1;
//     if (f[n] > 0)
//         return f[n];
//     return f[n] = factorial(n-1) * n;
// } ​
