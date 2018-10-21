//Task 1
for (var i = 0; i <= 15; i++) {
    if (i % 2 == 0) {
        console.log(i + " is even");
    }
    else {
        console.log(i + " is odd");
    }
}

//Task 2
for(var i = 1; i <= 100; i++) {
    if(i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");
    }
    else if(i % 3 == 0) {
            console.log("Fizz");
    }
    else if(i % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

//Task 3
function division(i, j) {
    if(j > 0) {
        let remainder = i%j;
        return division(j, remainder);
    }
    else {
        return Math.abs(i);
    }
}
console.log(division(84, 36));

//Task 4
var result = 0;
for (i = 0; i <= 1000; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        result += i;
    }
}
console.log(result);

//Task 5
for(var i = 10; i <= 90; i++) {
    if(i % 3 == 0 && i % 5 == 0) {
        console.log(i);
    }
}

//Task 6
for(var i = 70; i > 10; i--) {
    if(i % 2 == 1) {
        console.log(i);
    }
}

//Task 7
for(var i = 78; i > 12; i--) {
    if(i % 2 == 0 && i % 3 == 0) {
        console.log(i);
    }
}