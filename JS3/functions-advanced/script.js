// Task 1
// Напишите фулнкцию которая будет выводить текст на екран: "Как ваше имя?";
// После ввода имя запишите как свойство "name" для ссылки внутри функции this;
//
// Создайте пустой объект и вызовите эту функцию для объекта и просто для окна и посмотрите изменился ли объект,
// и создалась ли переменная name в окне браузера?
// let Name = prompt('Как ваше имя?') ;
//
// function inputName(){
//     return this.name = Name;
// }
// // let empty = {};
// // empty.name = inputName(Name);
//
// window.inputName(Name);
// console.log(window.name);

// Task 2
// Напишите функцию sumTo(n), которая для данного n вычисляет сумму чисел от 1 до n.

// function SumTo(n) {
//     result = 0;
//     for(var i = 1; i <= n; i++){
//         result += i;
//     }
//     return result;
// }
// console.log(SumTo(5));

// Task 3
// Напишите функцию min(a,b), которая возвращает меньшее из чисел a,b. не используя Math.min();

// function min(a,b) {
//     if(a < b){
//         return a;
//     }else if(a > b){
//         return b;
//     }
// }
// console.log(min(3,5));

// Task 4
// var object = {
//     number: 9,
//     cantDelete: 4,
//     getDouble: function(n) {
//         var result = n * 2;
//         return result / 3;
//     }
// };
// console.log(object.getDouble(3));
// это нужно было делать через objectDefineProperty

// Task 5
// Напишите код, который отсортирует массив объектов people по полю age.
var objs = [
    { name: 'Вася', age: 23 },
    { name: 'Маша', age: 18 },
    { name: 'Вовочка', age: 6 }
];

function compare(a,b) {
    if (a.age < b.age)
        return -1;
    if (a.age > b.age)
        return 1;
    return 0;
}

console.log(objs.sort(compare));

// 6 задание?
