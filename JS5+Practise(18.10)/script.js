//Task 1
// Write a JavaScript program to get the integers in range(x, y). Use recursion for this task.
// Example: range(2, 9)
// Expected Output: [3, 4, 5, 6, 7, 8]
function range(x, y, arr) {
    if (x + 2 > y) {
        return arr;
    } else {
        x++;
        arr.push(x);

        return range(x, y, arr);
    }
}

let arr = [];
console.log(range(1, 9, arr));

// __or task 1
function range(x, y) {
    let arr = [];

    function getRange(x, y, arr) {
        if (x + 2 > y) {
            return arr;
        } else {
            x++;
            arr.push(x);

            return getRange(x, y, arr);
        }
    }

    getRange(x, y, arr);
    return arr;
}

console.log(range(1, 9));

// Task for me:
// Write a JavaScript program to compute the exponent of a number.
// Note : The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here 8 is the base and 2 is the exponent.
function pow(x, n) {
    if (x == 0 && n >= 1) {
        return 0;
    }
    else if (n == 0) {
        return 1;
    }
    else if (n == 1) {
        return x;
    }
    else (x >= 1 && n > 1)
    {
        return x * pow(x, --n);
    }
}
console.log(pow(5,8));

//Task 8(with homework https://github.com/kl2karpenko/Mentor-Hometasks/blob/master/JavaScript/Base/lesson4/arrays.md )
// Дан массив объектов. Отсортируйте массив по полю age.

function arraySort(arr1) {
    return arr1.sort(function (a, b) {
        if (a.age > b.age) {
            return 1;
        } else if (a.age < b.age) {
            return -1;
        } else return 0;
    });
}

var arr0 = [
    {name: "L1", age: 45},
    {name: "L1", age: 20},
    {name: "L1", age: 10},
    {name: "L1", age: 78},
    {name: "L1", age: 41},
    {name: "L1", age: 10}
];
console.log(arraySort(arr0));

//Task next. Для фильтров. Из массива удалить нули.

function arrayRemoveNull(arr11) {
    return arr11.filter(function (item) {
        return item !== 0;
    });
}

var arr3 = [1,2,0,4,5,6,0,7,0];

console.log(arrayRemoveNull(arr3));

// Task 1. https://github.com/kl2karpenko/Mentor-Hometasks/blob/master/JavaScript/Base/lesson4/strings.md
// Дана строка 'aaa@bbb@ccc'. Замените все @ на '!' с помощью глобального поиска и замены.
str = "aaa@bbb@ccc";
var z= str.replace(/@/g, "!");
console.log("(Task 1)Result replacement:", z);

// Task 2
// Дана строка 'aaa bbb ccc'. Вырежите из нее слово 'bbb' тремя разными способами (через substr, substring, slice).
var str = "aaa bbb ccc";
var res = str.substr(4, 3); //1 параметер substr - начало, 2параметр - сколько елементов выводить.
console.log("(Task 2)Result substr:", res);

// or with help substring
var str = "aaa bbb ccc";
var res2 = str.substring(4, 7); //1 параметер substr - начало, 2параметр - конец.
console.log("(Task 2)Result substring:", res2);
// or with help slice
var str = "aaa bbb ccc";
var res3 = str.slice(4, 7); //1 параметер slice - начало, 2параметр - конец.
console.log("(Task 2)Result slice:", res3);

// Task 3
// В переменной date лежит дата в формате '2025-12-31'. Преобразуйте эту дату в формат '31/12/2025'.
var txt = "2025-12-31";
var txtNew = txt.replace(/-/g, "/");
console.log("(Task 3)Result replacement:", txtNew);

// Task 4
// Дана строка 'js'. Сделайте из нее строку 'JS'.
var text1 = "js";
var text2 = text1.toUpperCase();
console.log("(Task 4)Given:", text1);
console.log("(Task 4)Result:", text2);

// Task 5
// Дана строка 'я учу javascript!'. Найдите количество символов в этой строке.
var strNew = "я учу javascript!";
console.log("(Task 5)Result length:", strNew.length, "symbols");

// Task 6
// Дана переменная str, в которой хранится какой-либо текст. Реализуйте обрезание длинного текста по следующему
// принципу: если количество символов этого текста больше заданного в переменной n, то в переменную result запишем
// первые n символов строки str и добавим в конец троеточие '...'. В противном случае в переменную result запишем
// содержимое переменной str.
strText = "abcdefghijklmnop";
