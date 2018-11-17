// Task 1
// При выполнении этого кода вызов rabbit.eat() запишет в объект свойство full.
//
// Вопрос — в какой объект: в rabbit или animal?
var animal = { };
var rabbit = { };

rabbit.__proto__ = animal;

animal.eat = function() {
    this.full = true;
};

console.log("(Task 1) Result rabbit.eat: ", rabbit.eat());
// свойство full запишеться в animal

// Task 2
var animal = { jumps: null };
var rabbit = { jumps: true };

rabbit.__proto__ = animal;

console.log("(Task 2) Result 1: ", rabbit.jumps ); // ? - true (1)

delete rabbit.jumps;
console.log("(Task 2) Result 2: ", rabbit.jumps ); // ? - null (2)

delete animal.jumps;
console.log("(Task 2) Result 3: ", rabbit.jumps);  // ? - undefined(3)

// Task 3
// Задание состоит из двух частей:
//
// 1) Присвойте объектам ссылки proto так, чтобы любой поиск чего-либо шёл по алгоритму
// pockets -> bed -> table -> head.
// То есть pockets.pen == 3, bed.glasses == 1, но table.money == undefined.
// 2) После этого ответьте на вопрос, как быстрее искать glasses:
// обращением к pockets.glasses или head.glasses? Попробуйте протестировать.
var pockets = {
    money: 2000
};

var bed = {
    sheet: 1,
    pillow: 2
};
pockets.__proto__ = bed;

var table = {
    pen: 3
};
pockets.__proto__ = table;
var head = {
    glasses: 1
};
pockets.__proto__ = head;
console.log("(Task 3) Result pockets.glasses: ", pockets.glasses);
console.log("(Task 3) Result head.glasses: ", head.glasses);
// быстрее искать head.glasses,т.к. обьект glasses ближе к head.

// Task 4
// В примерах ниже производятся различные действия с prototype.
// Каковы будут результаты выполнения? Почему?
function Rabbit() { }
Rabbit.prototype = { eats: true };

var rabbit = new Rabbit();

Rabbit.prototype = {};

console.log("(Task 4) Result 1: ", rabbit.eats); // result - true
// А если код будет такой? (заменена одна строка):

function Rabbit(name) { }
Rabbit.prototype = { eats: true };

var rabbit = new Rabbit();

Rabbit.prototype.eats = false; // (поменяли значение обьекта eats на false)

console.log("(Task 4) Result 2:", rabbit.eats); // false
// А такой? (заменена одна строка)

function Rabbit(name) { }
Rabbit.prototype = { eats: true };

var rabbit = new Rabbit();

delete Rabbit.prototype.eats; // (удалили обьект eats и его теперь не существует)

console.log("(Task 4) Result 3: ", rabbit.eats); //undefined
// А если бы в последнем коде вместо строки (*) было delete rabbit.eats?
function Rabbit(name) { }
Rabbit.prototype = { eats: true };

var rabbit = new Rabbit();

delete rabbit.eats;

console.log("(Task 4) Result 4: ", rabbit.eats); //true

// Task 5
function Rabbit() { }
Rabbit.prototype.test = function() { console.log(this); }

var rabbit = new Rabbit();
rabbit.test(); // Rabbit { }
rabbit.__proto__.test(); // {test: f, constructor: f}
Rabbit.prototype.test(); // {test: f, constructor: f}
Object.getPrototypeOf(rabbit).test(); // {test: f, constructor: f}
// Есть ли разница между вызовами? Для alert разницы нету(вывод - [object Object] ), для console.log есть

// Task 6
// Вы — руководитель команды, которая разрабатывает игру, хомяковую ферму.
// Один из программистов получил задание создать класс «хомяк» (англ - "Hamster").
// Объекты-хомяки должны иметь массив food для хранения еды и метод found, который добавляет к нему.
// Ниже — его решение. При создании двух хомяков, если поел один — почему-то сытым становится и второй тоже.
// В чём дело? Как поправить?
function Hamster() {

    this.food = [ ]; // пустой "живот"

    this.found = function(something) {
        this.food.push(something);
    };
}

// Создаём двух хомяков и кормим первого
speedy = new Hamster();
lazy = new Hamster();

speedy.found("яблоко");
speedy.found("орех");

console.log("(Task 6) Первый хомяк сьел: ", speedy.food.length, "продукта."); // 2
console.log("(Task 6) Второй хомяк сьел: ", lazy.food.length, "продуктов.");   // 0

// Task 7
// Создайте класс "Person" который будет иметь обычные для человека характеристики.
// Далее создайте класс "Programmer" который будет наследовать класс "Person" и к нему еще дополнительно
// добавьте несколько методов и свойств которые свойственны именно человеку-программисту!
// Создайте неcколько экземпляром класса Programmer.
class Person {
    constructor () {
        this.legs = 2;
        this.arms = 2;
        this.canWalk = true;
    }
}

class Programmer extends Person {
    constructor() {
        super(); //super используется для вызова функций, принадлежащих родителю объекта.
        this.knowHTML = true;
        this.knowCSS = true;
        this.knowJS = true;
    }
}

var test1 = new Programmer("Vasia");
var test2 = new Programmer("Petia");

console.log("(Task 7) New programmer Vasia: ", test1);
console.log("(Task 7) New programmer Petia: ", test2);

// Task 8
// Напишите функцию-конструктор Adder(startingValue). Объекты, которые она создает,
// должны хранить текущую сумму и прибавлять к ней то, что вводит посетитель.
//
//   Более формально, объект должен:
//   Хранить текущее значение в своём свойстве value. Начальное значение свойства value ставится конструктором равным startingValue.
//   Метод addInput() вызывает prompt, принимает число и прибавляет его к свойству value.
//   Метод showValue() выводит текущее значение value. Таким образом, свойство value является текущей суммой всего,
// //   что ввел посетитель при вызовах метода addInput(), с учетом начального значения startingValue.
var result = 0;
function Adder(startingValue) {
    this.value = startingValue;
    this.addInput = function() {
        var addValue = prompt("(Task 8) Введите value: ");
        return result = +addValue + this.value;
    };
    this.showValue = function() {
        return this.value;
    };
}
var adder = new Adder(2);
// console.log("(Task 8) Сумма чисел: ", adder.addInput());
console.log("Task 8) Текущее значение value: ", adder.showValue());

// Task 9
// Напишите функцию sum, которая будет возвращать сумму любого количества чисел. Работать функция должна вот так:
// sum(2)(5)(6)(7)(2)(3)(4)( ); // 29 sum(56)(-10)(3)(1)( ); // 50
// Сделайте также, чтобы можно было работать и без пустых скобок в конце: sum(2)(5)(6)(7)(2)(3)(4) - вот так.
function sum(n) {
    let result = n;
    function addValue(k) {
        result += k;
        return addValue;
    }
    addValue.toString = function() {
        return result;
    };
    return addValue;
}
console.log("(Task 9) Result sum: ", sum(56)(-10)(3)(1) );

// Task 10
// Реализуйте бегущую строку на JavaScript.
var line = "Рандомный текст бегущей строки";
var speed = 100;
var i = 0;
function ticker() {
    if(i++ < line.length){
        document.demo.form.value = line.substring(0, i);
    }else {
        document.demo.form.value = " ";
        i = 0;
    }
    setTimeout("ticker()", speed);
}
ticker();