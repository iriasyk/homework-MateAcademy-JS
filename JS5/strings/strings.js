// Task 1. https://github.com/kl2karpenko/Mentor-Hometasks/blob/master/JavaScript/Base/lesson4/strings.md
// Дана строка 'aaa@bbb@ccc'. Замените все @ на '!' с помощью глобального поиска и замены.
str = "aaa@bbb@ccc";
var z = str.replace(/@/g, "!");
console.log("(Task 1)Result replacement:", z);

// Task 2
// Дана строка 'aaa bbb ccc'. Вырежите из нее слово 'bbb' тремя разными способами (через substr, substring, slice).
var strNew1 = "aaa bbb ccc";
var res = strNew1.substr(4, 3); //1 параметер substr - начало, 2параметр - сколько елементов выводить.
console.log("(Task 2)Result substr:", res);

// or with help substring
var strNew2 = "aaa bbb ccc";
var res2 = strNew2.substring(4, 7); //1 параметер substr - начало, 2параметр - конец.
console.log("(Task 2)Result substring:", res2);
// or with help slice
var strNew3 = "aaa bbb ccc";
var res3 = strNew3.slice(4, 7); //1 параметер slice - начало, 2параметр - конец.
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
var strText = 'Дана переменная str, в которой хранится какой-либо текст.';
function reduceText(strText, n) {
  if (n < strText.length) {
    let result = strText.substring(0, n) + '...';
    return result;
  }
  else {
    let result = strText;
    return result;
  }
}
console.log("(Task 6) Result reduce text: ", reduceText(strText, 30));

// Task 7
// Дана строка 'я учу javascript!'. С помощью метода split запишите каждое слово этой строки в отдельный элемент массива.
var strTXT7 = 'я учу javascript!';
var arrNew = strTXT7.split(' ');
console.log("(Task 7) Result(with split): ", arrNew);

// Task 8
// Дан массив ['я', 'учу', 'javascript', '!']. С помощью метода join преобразуйте массив в строку 'я+учу+javascript+!'.
var arrNew8 = ['я', 'учу', 'javascript', '!'];
arrNew8 = arrNew8.join('+');
console.log("(Task 8) Result(with join): ", arrNew8);

// Task 9
// Преобразуйте первую букву строки в верхний регистр.
var strNew9 = 'результат';
console.log("(Task 9) Given: ", strNew9);
console.log("(Task 9) Result(with upperCase): ", strNew9[0].toUpperCase() + strNew9.slice(1));

// Task 10
// Преобразуйте первую букву каждого слова строки в верхний регистр.
var strText10 = 'я учу javascript!';
var arrNew10 = strText10.split(' ');
for (let i = 0; i < arrNew10.length; i++) {
    arrNew10[i] = arrNew10[i].slice(0, 1).toUpperCase() + arrNew10[i].slice(1);
}
console.log("(Task 10) Given: ", strText10);
console.log("(Task 10) Result: ", arrNew10);

// Task 11
// Преобразуйте строку 'var_test_text' в 'varTestText'. Скрипт, конечно же, должен работать с любыми аналогичными строками.
var strText11 = 'var_test_text';
var arrNew11 = strText11.split('_');
for (let i = 1; i < arrNew11.length; i++) {
    arrNew11[i] = arrNew11[i].slice(0, 1).toUpperCase() + arrNew11[i].slice(1);
}
var resultNew11 = arrNew11.join('');
console.log("(Task 11) Given: ", strText11);
console.log("(Task 11) Result: ", resultNew11);

// Task 12
// Преобразуйте строку 'varTestText' в 'var_test_text'. Скрипт, конечно же, должен работать с любыми аналогичными строками.
var strText12 = 'varAbcTestText';
function turnBack(str) {
  let arr = [];
  let position = 0;
  for (let i = 0; i <= str.length; i++) {
    if (str.charAt(i).toUpperCase() == str.charAt(i)) {
        arr.push(str.slice(position,i));
        position = i;
    }
  }
  for (let i = 0; i < arr.length; i++) {
  arr[i] = arr[i][0].toLowerCase() + arr[i].slice(1);
  }
  str = arr.join('_');
  return str;
}
console.log("(Task 12) Given: ", strText12);
console.log("(Task 12) Result:", turnBack(strText12));

// Task 13
// Дано число, например '12345678'. Отделите пробелом каждую тройку чисел с конца. То есть у нас должно получится '12 345 678'.
// Число, конечно же, может быть любым.
var strNew13 = '12345678910';

function addSpace(str) {
    let arr = str.split('');
    let n = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
      n++;
      if (n % 3 == 0) {
        arr[i - 1] = arr[i - 1] + ' ';
      }
    }
    str = arr.join('');
    return str;
}
console.log("(Task 13) Given: ", strNew13);
console.log("(Task 13) Result: ", addSpace(strNew13));