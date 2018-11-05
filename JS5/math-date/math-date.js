// Task 1
// Даны переменные a = 10 и b = 3. Найдите остаток от деления a на b.
function residueDivision(a, b) {
    return a % b;
}
console.log("(Task 1) Result division residue: ", residueDivision(10, 3));

// Task 2
// Даны переменные a и b. Проверьте, что a делится без остатка на b.
// Если это так - выведите 'Делится' и результат деления, иначе выведите 'Делится с остатком' и остаток от деления.
function checkDivision(a, b) {
    if (a % b === 0){
        return ('(Task 2) Делится, результат - ' + a / b);
    } else{
        return ('(Task 2) Делится с остатком - ' + a % b);
    }
}
console.log(checkDivision(10,4));

// Task 3
// Даны переменные a и b. Найдите найдите модуль разности a и b. Проверьте работу скрипта самостоятельно для различных a и b.
function moduleDifference(a, b) {
    return (Math.abs(a) - Math.abs(b));
}
console.log("(Task 3) result module difference: ", moduleDifference(-10, 5));

// Task 4
// Найдите квадратный корень из 379. Результат округлите до целых, до десятых, до сотых.
function squareRoot1(a) {
    return ("(Task 4) Результат с округлением до целых - " + Math.round(Math.sqrt(a)));
}
console.log(squareRoot1(379));

function squareRoot2(a) {
    return ("(Task 4) Результат с округлением до десятых - " + Math.round(Math.sqrt(a)*10)/10);
}
console.log(squareRoot2(379));

function squareRoot3(a) {
    return ("(Task 4) Результат с округлением до сотых - " + Math.round(Math.sqrt(a)*100)/100);
}
console.log(squareRoot3(379));

// Task 5
// Выведите на экран случайное число от 1 до 100.
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
console.log("(Task 5) Result random(1-100): ", randomNumber(1, 100));

// Task 6
// Создайте функцию которая будет находить корни квадратного уровнения: x^2 + 4x + 9 = 0;
function quadraticEquation(a, b, c) {
    let zeroD,x1,x2;
    let D = b*b - 4*a*c;
    if (D < 0){
        return '(Task 6 ) Корней на множестве действительных чисел нет.(D < 0)';
    }
    else if(D == 0) {
        zeroD = (-(b / (2*a)));
        return ("(Task 6 ) Результат D = 0, x1=x2=" + zeroD);
    }
    else if( D > 0){
        x1 = (((-b + Math.sqrt(D)) / (2 * a)));
        x2 = (((-b - Math.sqrt(D)) / (2 * a)));
        return ('(Task 6 ) Корень x1 = ' + x1 + ', Корень x2 = ' + x2);
    }
}
console.log(quadraticEquation(1, 4, 9));

// Task 7
// Напишите скрипт, который проверяет, является ли данное число простым (простое число - это то, которое делится только на 1 и на само себя).
function simpleNumber(a) {
    if (a == 2 || a % 2 == 1) {
        return ("(Task 7) Число " + a + " простое.")
    }
    else if (a <= 0 || a == 1|| a % 2 == 0) {
        return ("(Task 7) Число " + a + " не простое.")
    }
    else {
        return ("(Task 7) Число " + a + "не простое.")
    }
}
console.log(simpleNumber(444.5));

// Task 8
// Напишите скрипт, который найдет все простые числа в заданном промежутке. Проверьте его работу на промежутке от 1 до 1000.
function simpleNumberRange(a) {
    if (a <= 0 || a > 1000){
        return ("(Task 8) Число " + a + " не входит в диапазон [1-1000]");
    }
    if (a == 1|| a % 2 == 0) {
        return ("(Task 8) Число " + a + " не простое.")
    }
    else if (a == 2 || a % 2 == 1) {
        return ("(Task 8) Число " + a + " простое.")
    }

    else {
        return ("(Task 8) Число " + a + "не простое.")
    }
}
console.log(simpleNumberRange(-2.5));

// Task 9
// Заполните массив 10-ю случайными числами. (Подсказка: нужно воспользоваться циклами for или while).
var arr = [];
while (arr.length < 10) {
  arr.push(Math.round(Math.random()*9))
}
console.log("(Task 9) Result massive random numbers: ", arr);

// Task 10
// Выведите на экран текущие день, месяц и год в формате 'год-месяц-день'.
function dateCurrent(){
    let date = new Date();
    return (date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate());
}
console.log("(Task 10) Текущая дата:", dateCurrent());

// Task 11
// Выведите на экран текущий месяц словом, по-русски.
function currentMonth() {
    let date = new Date();
    return (date.toLocaleString('ru', {month: 'long'}));
}
console.log("(Task 11) Текущий месяц: ", currentMonth());

// Task 12
// Выведите на экран текущую дату-время в формате '12:59:59 31.12.2014'.
// Для решения этой задачи напишите функцию, которая будет добавлять 0 перед днями и месяцами,
// которые состоят из одной цифры (из 1.9.2014 сделает 01.09.2014).
function currentDateAndTime() {
    let date = new Date();
    return ('0' + date.getHours()).slice(-2) + ':' + ('0' + date.getMinutes()).slice(-2) + ':' + ('0' + date.getSeconds()).slice(-2) + ' ' +
        ('0' + date.getDate()).slice(-2) + '.' + ('0' + (date.getMonth()+1)).slice(-2) + '.' +
        (date.getFullYear());
}

console.log("(Task 12) Текущие время и дата: ", currentDateAndTime());

// Task 13
// Узнайте, какой был день 7-го января 2015 года.
function discoverDate() {
    let date = new Date(2015, 0, 7);
    return (date.toLocaleString('ru', {weekday: 'long'}));
}

console.log("(Task 13) Какой был день 07.01.2015? Ответ: ", discoverDate());

// Task 14
// Выведите на экран количество минут с 1-го января 1970 года до настоящего момента времени.
function quantityMinutes() {
    let date = new Date();
    return (date.getTime() / (1000 * 60)); // 1000-милисекунд, 60 - минут в одном часе
}
console.log("(Task 14) Количество минут с 1-го января 1970 года до настоящего момента времени:", quantityMinutes());

// Task 15
// Напишите метод, которая преобразует секунды в дни, часы, минуты. Например: 10..0 секунд это 3 дня, 23 часа, 46 минут, 25 секунд.
function secondsTime(sec) {
    return (Math.floor(sec / 86400) + 'дн., ' + ((Math.floor(sec / 3600)) - (Math.floor(sec / 86400)*24)) + 'часа(ов), ' + Math.floor((sec / 60)%60) + 'мин., ' + sec % 60 + 'сек.');
}
console.log("(Task 15) Результат: ", secondsTime(100001));