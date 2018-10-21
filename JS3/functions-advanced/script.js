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
    console.log(i) //1 2 3 4 5 6 7 8 9
}

//Task 5 (Напишите функцию подсчета факториала числа, но каждый раз возвращая факториал умножайте его на 2 если число четное.)

function pow(value) {
    let counter = value;
    let result = 1;
    if (value === 0) {
        console.log(result)
    }
    while(value > 0) {
        if (counter === 0){
            break;
        }
        result *= counter;
        counter = counter - 1;
    }
    if (value % 2 === 0) {
        console.log(result*2)
    }
    else {
        console.log(result)
    }
}
pow(5);


//Task 6
//Подсчитайте время выполнения выше написанной вами функции c помощью объекта console.
function factrl(counter) {
    console.time("start");
    var counter = prompt("Введите число:");
    var factorial = 1;
    document.write("Факториал числа: " + counter + "! = ");
    while(counter > 0){
        if (counter == 0){
            factorial = 1;
            break;
        }
        factorial *= counter;
        counter = counter - 1;
    }
    console.timeEnd("start");
    document.write(factorial);
}
console.log(factrl());

//Task 7
//Напишите скрипт, который генерирует случайную строку.
//В строке должны быть маленькие и большие латинские буквы, цифры и подчеркивание.
function random() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

console.log(random());

//Task 8
//Реализуйте функцию union, которая объединит уникальные элементы всех массивов, переданных ей параметром.
//Пример: union([1, 2, 3], [101, 2, 1, 10], [2, 1]) вернёт [1, 2, 3, 101, 10].
var arr1 = [1, 2, 3];
var arr2 = [101, 2, 1, 10];
var arr3 = [2,1];

function union(){
    var arr4 = [];
    arr4 = [...new Set([...arr1 ,...arr2 ,...arr3])];
    console.log(arr4);
}
union(arr1,arr2,arr3);

//Task 9
//Реализуйте функцию flatten, которая в случае,
// если массив обладает уровнями вложенности, приведёт его к элементарному виду (вложенность может быть любой глубины).
// Пример: flatten([1, [2], [3, [[[4]]]]]) вернёт [1, 2, 3, 4].

function union(...arrs) {

    let newArr = [];
    for (let i in arrs) {
        newArr = newArr.concat(arrs[i]);
    }
    let uniqueArr = Array.from(new Set(newArr));
    console.log(uniqueArr);

}
union([1, 2, 3, 4], [1, 2, 3], [3, 4, 5, 6, 7, 15]);

//Task 10
//Реализуйте функцию unique, которая будет удалять дубли из массива.

function unique(arr) {
    var result = [];

    nextInput:
        for (var i = 0; i < arr.length; i++) {
            var str = arr[i]; // для каждого элемента
            for (var j = 0; j < result.length; j++) { // ищем, был ли он уже?
                if (result[j] == str) continue nextInput; // если да, то следующий
            }
            result.push(str);
        }
    return result;
}
var strings = ["one", "two", "three", "one",
    "two", "three", 1, 1, 2
];
console.log( unique(strings) );
