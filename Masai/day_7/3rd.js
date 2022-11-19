// Given two numbers A and B print which is smaller

var A = 112;
var B = 15;
if (A < B) {
    console.log("A IS SMALLER = " + A)
} else {
    console.log("B IS SMALLER = " + B)
}


// Given two passwords print "Wrong Password" if both the passwords doesn't match

var pas1 = 122345;
var pas2 = 12345;
if (pas1 != pas2) {
    console.log("WRONG PASSWORD");
}

// Given a number if it is odd print "Odd Number"


var num = 13;
if ((num % 2) != 1) {
    console.log("Odd Number");
}



// Given the year of birth if the age is between 20 and 29 (both included) print Twenties
var year = 1999;
var age = 2021 - year;
if (age >= 20 && age <= 29) {
    console.log("Twenties");
}
console.log("");


// Given the age of three people A B C (all different) Print the names in descending order of age

var a = 19;
var b = 20;
var c = 21;

if (c > b && c > a) {
    if (b > a) {
        console.log("c b a");
    } else {
        console.log("c a b");
    }
} else if (b > a) {
    if (a > c) {
        console.log("b a c");
    } else {
        console.log("b c a");
    }
} else {
    if (b > c) {
        console.log("a b c");
    } else {
        console.log("a c b")
    }
}
console.log("");




// Given two numbers A and B print which is greater (Use ternary operator)


var one = 22;
var one2 = 12;
(one > one2) ? console.log("One is Greater = " + one) : console.log("One2 is Greater = " + one2);





// Given the day in long format like "Monday", "Tuesday" ... print in short format "Mon", "Tue"
var day = "Wed";
switch (day) {
    case "Mon":
        console.log("Monday")
        break;
    case "Tue":
        console.log("Tuseday")
        break;
    case "Wed":
        console.log("Wednesday")
        break;
    case "Thu":
        console.log("Thursday")
        break;
    case "Fri":
        console.log("Friday")
        break;
    case "Sat":
        console.log("Saterday")
        break;
    case "Sun":
        console.log("Sunday")
        break;

    default:
        console.log("Default")
        break;
}