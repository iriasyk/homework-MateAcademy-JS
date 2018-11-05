// Task 1
// Из массива arr выведите строку которая будет равна "Мама мыла раму" используя встроенные методы
// массива (если есть лишние елементы в массиве их нужно удалить!)
function arrReverse() {
    let arr = ["у", "м", "а", "р", " ", "а", "л", "ы", "м", 5, " ", "а", "м", "а", "М", 1];
    arr = arr.filter(function(n){
        return (typeof n == "string");
    });
    arr.reverse();
    return arr.join("");
}
console.log("(Task 1) Result arr reverse: ", arrReverse());

// Task 2
// Палиндром - это строка которая читается с обоих сторон одинаково. Например: Анна, оно, А роза упала на лапу Азора.
// Необходимо написать функцию isPal(string) которая возвращает true или false в зависимости от того является ли строка палиндромом или нет.
function isPal(string) {
  return ((string.replace(/\s+/g, '').toLowerCase()) == (string.replace(/\s+/g, '').toLowerCase().split('').reverse().join('')));
}
console.log("(Task 2) Result: ", isPal('12321'));

// Task 3
// Анаграммы — слова, состоящие из одинакового количества одинаковых букв, но в разном порядке. Например:
// воз - зов, киборг - гробик, корсет - костер - сектор,
// Напишите функцию anClean(arr), которая возвращает массив слов, очищенный от анаграмм.
function anClean(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    let sorted = arr[i].toLowerCase().split('').sort().join('');
    obj[sorted] = arr[i];
  }
  let result = [];
  for (let key in obj) result.push(obj[key]);
  return result;
}
var arrNew3 = ['воз', 'киборг', 'корсет', 'ЗОВ', 'гробик', 'костер', 'сектор'];
console.log("(Task 3) Result: ", anClean(arrNew3));

// Task 4
// Создайте программу которая соеденит массив в строку, поменяет местами буквы в словах и порядок следования слов в массиве.
function JoinReverse(){
    let arr = [ 'rrrA', 'toboR', 'ekiL', 'dooG', 'esoR' ];
    arr = arr.map(function(arrNew){
        return (arrNew.split("").reverse().join(""));
    });
    arr.reverse();
    return arr.join("");
}
console.log("(Task 4) Result: ", JoinReverse());

// Task 5
// 1. Найти сумму целых чисел от 1 до 100.
// 2. Найти сумму четных чисел от 0 до 100.
function sumInt(){
    let sum = 0;
    for (let i = 1; i < 101; i++) {
        sum += i;
    }
    return sum;
}
console.log("(Task 5) Result sum(int) numbers [1-100]: " + sumInt());

function sumEven(){
    let sum = 0;
    for (let i = 1; i < 101; i++) {
        if(i % 2 == 0){
            sum += i;
        }
    }
    return sum;
}
console.log("(Task 5) Result sum(even) numbers [1-100]: " + sumEven());

// Task 6
// Напишите функцию callMe которая будет принимать 3 аругумента, это будут цыфры,
// потом она будет суммировать их и выводить на екран результат их суммы!
// Если в нее передели не числа то она должна выводить сообщение об ошибке в консоль и возвращать null;
// (вывод ошибки в консоль осуществялется через console.error("Тут текст ошибки") )
function callMe(a, b, c){
  if ((typeof (a) != "number") || (typeof (b) != "number") || (typeof (c) != "number"))  {
    return console.error("Вы ввели не число");
  }
  else {
    let result = a + b + c;
    return result;
  }
}
console.log("(Task 6) Result sum: ", callMe(1,5,8));

// Task 7
// Напишите функцию callMeAgain которая будет принимать 1 аргумент, который будет массивом.
// Она должна возвращать массив соедененный через запятые и отсортированный по алфавиту (Array.join(','));
function callMeAgain(n) {
  n = n.join().replace(/,/g, '').split('').sort().join();
  return n;
}
console.log("(Task 7) Result: ", callMeAgain(['dssS', 'dasdasA', 'fadsfdS', 'Test', 'tjkl']));

// Task 8
// Отсортируйте массив по полю age.
var arrNew8 = [
   {name: "L1", age: 45},
   {name: "L1", age: 20},
   {name: "L1", age: 10},
   {name: "L1", age: 78},
   {name: "L1", age: 41},
   {name: "L1", age: 10}
];
arrNew8 = arrNew8.sort(function(a, b){
  return a.age == b.age ? 0 : +(a.age > b.age) || -1;
});
console.log("(Task 8) Result: ", arrNew8);

// Task 9
// Через prompt узнайте у пользователя его имя и возраст, и запишите в отсортированный массив с 8 задания в правильную позицию,
// чтобы все элементы в массиве остались отсортированные по полю age
// Если такой пользователь уже существует в массиве верните пользователю сообщение: "Такой пользователь уже существует"
function addPerson(){
    let name = prompt("Your name", "L1");
    let age = prompt("Your age", "10");
    let live = false;
    for (let i = 0; i < arrNew8.length; i++) {
        if(arrNew8[i].name == name && arrNew8[i].age == age){
            alert("Такой пользователь уже существует");
            live = true;
            break;
        }
    }
    if(!live){
        arrNew8.push({name: name, age: +age});
    }
    arrNew8 = arrNew8.sort(function(a, b){
        return a.age > b.age;
    });
    return arrNew8;
}
//console.log("(Task 9) Result: ", addPerson());

//Task 10
// Дан массив с числами. Подсчитайте количество цифр 3 в данном массиве.
// Пример: [13, 35, 3, 443] - в массиве 4 цифры 3.
function find(arr, n) {
    let newArr = arr.join('').split('').filter(function(number) {
      return number == n;
    });
      return newArr.length;
}
console.log("(Task 10) Result ", find([13, 35, 3, 443],3), "numbers");

// Task 11
// Дан массив ['1', '2', '3', '4', '5', '6']. Сделайте из него строку '16-25-34'. Массив, конечно же, может быть любым.
function ChangeArr(arr){
    let middle = Math.floor(arr.length/2);
    let odd = (arr.length%2 !== 0) ? true : false;
    let str = "";
    for (let i = 0; i < middle; i++) {
        if(odd && i+1 == middle){
            str += arr[i] + arr[middle] + arr[arr.length-i-1];
        }
        else{
            str += arr[i] + arr[arr.length-i-1];
        }
        if(i + 1 !== middle){
            str += "-";
        }
    }
    return str;
}
console.log("(Task 11) Result change arr: ", ChangeArr(['1', '2', '3', '4', '5', '6']));

// Task 12
// Даны два массива.
// Создайте новый массив, заполненный суммами соответствующих элементов, то есть [1+4, 2+5, 3+6] = [5, 7, 9].
// Скрипт должен работать для любых массивов, даже если их длина не одинакова (подумайте, что делать в этом случае).
function SumOfArrays(arr1, arr2) {
  let newArr = [];
  let arrLength;
  if (arr1.length < arr2.length) {
      arrLength = arr2.length;
  }
  else {
      arrLength = arr1.length;
  }
  for (let i = 0; i <= arrLength; i++) {
    if ((arr1[i] != undefined) && ( arr2[i] != undefined)) {
      newArr.push(arr1[i] + arr2[i]);
    }
    else if ((arr2[i] === undefined) && (arr1[i] != undefined)) {
      newArr.push(arr1[i] + '');
    }
    else if (arr1[i] === undefined && arr2[i] != undefined) {
      newArr.push(arr2[i] + '');
    }
  }
  return newArr;
}
console.log("(Task 12) Result: ", SumOfArrays([1,2,3], [4,5,6]));

// Task 13
// Дан массив. Напишите функцию, которая будет удалять элемент из массива по его тексту.
// Пример: arr = [1,2,3,4,3,3]. Удалим все элементы с содержимым 3: func(arr, 3).
function arrayRemoveItems(arr, n) {
  return arr.filter(function (item) {
    return item !== n;
  });
}
console.log("(Task 13) Result remove items: ", arrayRemoveItems([1,2,3,4,3,3], 3));

// Task 14
// Реализуйте функцию intersection, вернёт массив из элементов, встречающихся в каждом из переданных массивов.
// Пример: intersection([1, 2, 3], [101, 2, 1, 10], [2, 1]) вернёт [1, 2].
function intersection(arr1,arr2,arr3) {
  let result = [];
  for (let i = 0; i <= arr1.length; i++) {
    if ((arr2.indexOf(arr1[i]) > -1) && (arr3.indexOf(arr1[i]) > -1)) {
      result.push(arr1[i]);
    }
  }
  return result;
}
console.log("(Task 14) Result: ", intersection([1, 2, 3],[101, 2, 1, 10],[2, 1]));

// Task 15
// Дан массив с числами, к примеру [2, 3, 1, 4].
// Сделайте из него массив [2, 2, 3, 3, 3, 1, 4, 4, 4, 4]. В массиве могут быть только целые положительные числа.
function  changeArr(arr){
    let newArr = [];
    let j = 0;
    for (let i = 0; i < arr.length; i++) {
        do{
            newArr.push(arr[i]);
            j++;
        }while(j < arr[i]);
        j = 0;
    }
    return newArr;
}
console.log("(Task 15) Result: ", changeArr([2, 3, 1, 4]));

// Task 16
// Реализуйте функцию, которая будет дополнять массив заданными элементами до заданного размера.
// Пример: [1,2,3] дополним нулями до размера 6 - [1,2,3,0,0,0].
function CompleteArr(arr, newIndex, n) {
  for (let i = 0; i < n; i++) {
    if (arr.length < n) {
      arr.push(newIndex);
    }
  }
  return arr;
}
console.log("(Task 16) Result: ", CompleteArr([1,2,3,4], 0, 8));

// Task 17
// Дан массив с числами. Не используя цикл, выведите:
// 1. Три самых маленьких числа в массиве (числа должны быть разные, дубли должны быть проигнорированы).
// 2. Первые 3 отрицательных числа в массиве (по порядку следования).
function writeWithoutLoop(arr){
    let newArr = arr.slice(0);
    let min1 = Math.min(...arr);
    arr.splice(arr.indexOf(min1), 1);
    let min2 = Math.min(...arr);
    arr.splice(arr.indexOf(min2), 1);
    let min3 = Math.min(...arr);
    arr.splice(arr.indexOf(min3), 1);
    console.log("(Task 17) Три самых маленьких числа в массиве: " + min1 + ", " + min2 + ", " + min3);
    newArr = newArr.filter(function(index){
        return index < 0;
    });
    console.log("(Task 17) Первые 3 отрицательных числа в массиве: " + newArr.slice(0,3));
}
writeWithoutLoop([1, 2, -3, 4, 5, -6, 7, 8, -9, -10, 11]);