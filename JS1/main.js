// var str = "Have a good day!";
// console.log(str);
//
// var age = 123;
// console.log(age);
// age = undefined;
// console.log( age );

var info = new Object()
info.name = 'Igor'
info.age = 19;
console.log(info);
var name = {};
for (var key in info) {
    name[key] = info[key];
}
console.log(name)
