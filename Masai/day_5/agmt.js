console.log("");


// Given two numbers A and B print which is larger
var a = 12;
var b = 33;
if (a > b) {
    console.log("A is Larger");
}
else if (b > a) {
    console.log("B is Larger");
}
else {
    console.log("Both A and B are Equal");
}
console.log("");




// Given two passwords print "Wrong Password" if both the passwords doesn't match. "Valid Password" if both the passwords are same.
var pw = "shivam";
var pw2 = "singh";
if (pw !== pw2) {
    console.log("Wrong Password");
}

var passw = 12;
var passw2 = "12";
if (passw == passw2) {
    console.log("Valid Password");
}
console.log("");



// Given a number if it is odd print "Odd Number" other wise print "Even Number"

var n1 = 3;
if (n1 % 2 == 1) {
    console.log("Odd Number");
}
var n2 = 4;
if (n2 % 2 !== 1) {
    console.log("Even Number");
}
console.log("");



// Given the year of birth, if the age is between 13 and 19 (both included) print Teenage and in between 20 and 29 (both included) print Twenties
var year = 1998;
var age = 2021 - year;
if (age
    >= 20 && age <= 29) {
    console.log("Twenties");
}
console.log("");




// Given the age of three people A B C (all different) Print the names in descending order (First Line) ascending order (Second Line)
var ageA = 19;
var ageB = 20;
var ageC = 21;

if (ageC > ageB && ageC > ageA) {
    if (ageB > ageA) {
        console.log("ageC ageB ageA");
    } else {
        console.log("ageC ageA ageB");
    }
} else if (ageB > ageA) {
    if (ageA > ageC) {
        console.log("ageB ageA ageC");
    } else {
        console.log("ageB ageC ageA");
    }
} else {
    if (ageB > ageC) {
        console.log("ageA ageB ageC");
    } else {
        console.log("ageA ageC ageB")
    }
}

var ageA = 19;
var ageB = 20;
var ageC = 21;

if (ageC < ageB && ageC < ageA) {
    if (ageB < ageA) {
        console.log("ageC ageB ageA");
    } else {
        console.log("ageC ageA ageB");
    }
} else if (ageB < ageA) {
    if (ageA < ageC) {
        console.log("ageB ageA ageC");
    } else {
        console.log("ageB ageC ageA");
    }
} else {
    if (ageB < ageC) {
        console.log("ageA ageB ageC");
    } else {
        console.log("ageA ageC ageB")
    }
}
console.log("");




// Given two numbers A and B print "Equal" if both are equal otherwise print "Different" (Use ternary operator)
 var a = 11;
 var b = 11;
 a == b ? console.log("A nand B are Equal") : console.log("A and B are Different");

var a = 12;
var b = 11;
a < b ? console.log("A and B are Equal") : console.log("A and B are Different");
console.log("");




// Given the month in long format like "January", "February" ... print in short format "Jan", "Feb"

var day = "Monday";

switch (day) {
    case "Sunday":
        console.log("Sun");
        break;
    case "Monday":
        console.log("Mon");
        break;
    case 'Tuesday':
        console.log("The");
        break;
    case "Wednesday":
        console.log("Wed");
        break;
    case 'thursday':
        console.log("Thu");
        break;
    case "Friday":
        console.log("Fri");
        break;
    case "Saterday":
        console.log("Sat");
        break;

    default:
        console.log("None")
        break;
}
console.log("");



