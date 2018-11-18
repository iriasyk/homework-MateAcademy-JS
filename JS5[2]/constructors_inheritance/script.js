// Task 1
// Сделайте, чтобы свойства firstName и lastName были доступны не только на чтение, но и на запись.
function User(fullName) {
    this.fullName = fullName;
    let name = fullName.split(' ');
    Object.defineProperty(this, 'firstName', {
        get: function() {
            return name[0];
        },
        set: function(firstName) {
            this.fullName = firstName + ' ' + this.lastName;
        }
    });
    Object.defineProperty(this, 'lastName', {
        get: function() {
            return name[1];
        },
        set: function(lastName) {
            this.fullName = this.firstName + ' ' + lastName;
        }
    });
}

var vasya = new User('Александр Пушкин');
console.log("(Task 1) Result full name(1): ", vasya.fullName);
vasya.lastName = 'Толстой'; // перезапись фамилии
console.log("(Task 1) Result full name(2): ", vasya.fullName);

// Task 2
// Первый шаг задачи: вызов calculate(str) принимает строку, например «1 + 2», с жёстко заданным форматом «ЧИСЛО операция ЧИСЛО»
// (по одному пробелу вокруг операции), и возвращает результат. Понимает плюс + и минус -.

// Второй шаг — добавить калькулятору метод addMethod(name, func), который учит калькулятор новой операции.
// Он получает имя операции name и функцию от двух аргументов func(a,b), которая должна её реализовывать.
// Например, добавим операции умножить , поделить / и возвести в степень *
function Calculator() {
    var method = {
        "-": function(a, b) {
            return a - b;
        },
        "+": function(a, b) {
            return a + b;
        }
    };
    this.addMethod = function(operation, func) {
        method[operation] = func;
    };
    this.calc = function(str) {

        let arr = str.split(' '),
            a = +arr[0],
            b = +arr[2],
            operand = arr[1];
        return method[operand](a, b);
    }
};

var powerCalc = new Calculator;
powerCalc.addMethod('*', function(a, b) {
    return a * b;
});
powerCalc.addMethod('/', function(a, b) {
    return a / b;
});
powerCalc.addMethod('**', function(a, b) {
    return Math.pow(a, b);
});

console.log("(Task 2) Result: ", powerCalc.calc('2 ** 4'));