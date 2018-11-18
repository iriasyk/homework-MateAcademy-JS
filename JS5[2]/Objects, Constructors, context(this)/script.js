// Example for context:
function isContextEqualTo(contextLink, currentContext) {
    console.log(contextLink === currentContext);
}

function Person(name, age) {
    this.name = name;
    this.age = age;

    this.getName = function () {
        isContextEqualTo(window, this); // true
        isContextEqualTo(user, this); // false
        return this.name;
    };
}

Person.getAge = function () {
    isContextEqualTo(window, this); // false
    return this.age;
};

var user = new Person("erer", 45);

var getAge = Person.getAge;
var getName = user.getName;

console.log(getAge()); //  window
console.log(getName()); //  window
console.log(user.getName()); //  user

Person.getAge = function() {
    isContextEqualTo(Person, this); // true
    return this.name;
}

user.getAge = getAge;
console.log(user.getAge()); //  user

// Task 1
// Создайте функцию getName, которая берет «имя» из текущего контекста и возвращает его пользователю.
// Затем создайте объект с ключом «name» и вызовите «getName» в контексте объекта, а затем в контексте глобального окна.
function getName() {
    this.name = name;
    return name;
}
var obj = {name: 'Вася'};

console.log("(Task 1) Obj result: ", getName.call(obj));
console.log("(Task 1) Window result: ", getName.call(window));

// Task 2
// Создайте funnction «getDoubled», который удвоит свойство «number» в текущем контексте
// (зависит от контекста) и умножит его на 2, затем создаст funnction «getDoubledTrippled»,
// который будет использовать результат функции getDoubled и умножить его на 3.
// Используйте bind || вызов || применяются в этом случае.
var number = 2;
var objs ={number: 3}; //в контексте обьекта
function getDoubled() {
    this.number *= 2;
    return this.number;
}

function getDoubledTrippled() {
    return getDoubled.call(this) * 3; // в контексте this (number = 2;)
}

console.log("(Task 2) Результат в контексте window: ", getDoubledTrippled());
console.log("(Task 2) Результат в контексте obj: ", getDoubledTrippled.call(objs)); //в контексте обьекта objs = {number: 3};

// Task 3
// Создайте конструктор, который будет описывать «Город». Должно
// - «имя», «население», «страна» (передано в качестве аргументов для функций);
// - имеют методы getPopulation (возвращение населения), 'getCityName' (имя возвратного города);
// - имеют постоянную: «ОБЛАСТЬ», я не могу изменить или удалить
// - есть метод addCitizen, который увеличивает «популярный» +1
function city(name, population, country) {
    this.name = name;
    this.population = population;
    this.country = country;
    this.getPopulation = function () {
        return this.population;
    };
    this.getCityName= function () {
        return this.name;
    };
    Object.defineProperty(this, "area", {
        writable: false,
        configurable: false,
        value: 'some area'
    });
    this.addCitizen = function () {
        this.population += 1;
        return this.population;
    };
}

var Kiev = new city("Kiev", "9999999", "Ukraine");
console.log("(Task 3) Result: ", Kiev.getCityName(), Kiev.getPopulation(), Kiev.addCitizen());

// Task 4
// Создайте функцию sum, которая будет возвращать сумму различного количества переданных ей арифметических значений.
// Он должен работать следующим образом: sum(2)(5)(6)(7)(2)(3)(4)
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
console.log("(Task 4) Result sum: ", sum(2)(5)(6)(7)(2)(3)(4) ); //29