//Task 1
// Напишите функцию getLength, которая будет считать длину любого заданного массива
function getLength() {
    let arr = [1, 2 , 5, 8];
    document.write("Длинна массива: " + arr.length + "<br />");
    document.write("<hr />");
}
getLength();

//Task 2
// Напишите функцию getArgsLength, которая получит любое количество аргументов и вернет длину всех аргументов
function getArgsLength() {
    document.write("Длинна аргументов: " + arguments.length + "<br />")
    document.write("<hr />");
}
getArgsLength(1,2, 3, 4, 10, 'abc');

// Task3
// Напишите функцию «removeEmptyElements», которая удалит все пустые элементы в массиве,
// заданные ей, а также проверит внутри нее, что аргумент является массивом
let array = ["abc", null, "bca", , 5, "gda", null];
function removeEmptyElements(Arrs){
    for (let i in Arrs) {
        if (Array.isArray(Arrs[i])){
            Arrs[i] = removeEmptyElements(Arrs[i]);
        } else {
            var cleanArray = Arrs.filter(element => element !== null)}}
    return cleanArray;
}
document.write("Результат(c delete елементами): " + (removeEmptyElements(array)));
document.write("<hr />");

// Task 4
// Напишите функцию «sortReverse», которая будет сортировать элементы массива в обратном порядке
function reverseSort(arr) {
    arr = ["abc", "bca", 5, "gda"];
    document.write("Обратный порядок: " + arr.reverse() + "<br/>");
    document.write("<hr />");
}
reverseSort();
// Task 5
// Создайте функцию, которая получит дату в качестве аргумента (также проверьте, является ли она датой),
// и верните объект: {день: ваша_значение, месяц: ваша_значение, год: ваша_значение}
let date = new Date();
// console.log(date);
let result = function dateObject(date) {
    let newDateObj;
    if(date instanceof Date && !isNaN(date.valueOf())) {
        return newDateObj = {
            day: date.getDate(),
            month: date.getMonth() + 1,
            year: date.getFullYear()
        }
    }
    return newDateObj;
}
console.log(result(date));

// Task 6
// Напишите функцию,
// которая подсчитывает количество свойств объекта и оповещает номер результата через 1 секунду (также должна работать для массивов)
let timeLength = function(a,b,c){
    setTimeout(function() {
        return Object.keys(date).length;
    }, 1000)}
// timeLength();
document.write("Количество свойств обьекта: " + timeLength.length + "<br/>")// 3
document.write("<hr />");

// Task 7
// Напишите функцию, которая каждые 2 секунды будет запрашивать у пользователя свое имя и будет останавливаться только в том случае,
// если он будет вводить ваше имя, иначе он снова попросит имя
let request = function() {
    let input = prompt("Enter your name: ", "");
    if(!input) {
        var still = setInterval(function() {
            input = prompt("Please, enter your name", "");
            if(input) {
                clearInterval(still);
            }
        }, 2000)
    }else {
        return;
    }
}
// request();
