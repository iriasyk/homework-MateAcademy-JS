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