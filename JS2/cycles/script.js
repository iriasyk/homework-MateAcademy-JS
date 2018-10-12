//Task 1
for (var i = 0; i <= 50; i++) {
    console.log(i);
}

//Task 2
var arr = [1,2,3,4,5]
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

//Task 3
var result = 1;
var arr = [2, 3, 4, 5];
for (var i = 0; i < arr.length; i++) {
    result = result * arr[i];
}
console.log(result);

//Task 4
var obj = {
    "Minsk": "Belarus",
    "Moscow": "Russia",
    "Kyiv": "Ukraine"
}
for (var key in obj) {
    console.log(key + " - " + obj[key]);
}

//Task 5
var n = 1000;
while(n > 50) {
    n /= 2;
    console.log(n);
}
var iterations = 5; //result of iterations
console.log("Number of iterations -" ,iterations);

//Task 6
var arr = [2,5,9,10,0,4]
for (var i = 0; i < arr.length; i++) {
    if(3 < arr[i] && arr[i] < 10) {
        console.log(arr[i]);
    }
}

//Task 7
var month = 10;
var allMonths = [1,2,3,4,5,6,7,8,9,10,11,12];
for(var i = 0;i < allMonths.length; i++) {
    if(allMonths[i] == month) {
        console.log(allMonths[i]);
    }
}