console.log("");


// Given two numbers A and B print which is smaller
var a = 6;
var b = 4;
if (a < b) {
    console.log("A is Smaller");
}
else if (b < a) {
    console.log("B is Smaller");
}
else {
    console.log("A and B are equals ");
}
console.log("");




// Given two passwords print "Wrong Password" if both the passwords doesn't match
var pw = "shivam";
var pw2 = "singh";
if (pw !== pw2) {
    console.log("Wrong Password");
}
console.log("");



// Given a number if it is odd print "Odd Number"
var n1 = 3;
if (n1 % 2 == 1) {
    console.log("Odd Number");
}
console.log("");



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
var a = 12;
var b = 11;
a > b ? console.log("a is grater") : console.log("b is greater");
console.log("");




// Given the day in long format like "Monday", "Tuesday" ... print in short format "Mon", "Tue"
var day = "Mon";

switch (day) {
    case "Sun":
        console.log("Sunday");
        break;
    case "Mon":
        console.log("Monday");
        break;
    case 'Thu':
        console.log("Thusday");
        break;
    case "Wed":
        console.log("Wednesday");
        break;
    case 'thur':
        console.log("Thursday");
        break;
    case "Fri":
        console.log("Friday");
        break;
    case "Sat":
        console.log("Saterday");
        break;

    default:
        console.log("None")
        break;
}
console.log("");



