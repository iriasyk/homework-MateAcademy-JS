//Task 1
function getLength() {
    var arr = [1, 2 , 5, 8];
    document.write("Длинна массива: " + arr.length + "<br />");
    document.write("<hr />");
}
getLength();

//Task 2
function getArgsLength() {
    document.write("Длинна аргументов: " + arguments.length + "<br />")
    document.write("<hr />");
}
getArgsLength(1,2, 3, 4, 10, 'abc');

//Task3
function removeEmptyElements() {
    var arr = [0, 1, 2];// refresher: [0, 1, 2,,,5]
    arr[5] = 5;
    // arr = arr.splice(2);
    console.log(arr);
    document.write("Массив:" + arr + "<br/>")
    document.write("<hr />");
}
removeEmptyElements();