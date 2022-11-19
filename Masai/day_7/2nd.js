// Given two numbers A and B print which is greater
var A = 112;
var B = 15;
if (A > B) {
    console.log("A IS GREATER = " + A)
} else {
    console.log("B IS GREATER = " + B)
}

// Given two passwords print "Valid Password" if both the passwords are same
var pas1 = 12345;
var pas2 = 12345;
if (pas1 == pas2) {
    console.log("Valid");
}

// Given a number if it is even print "Even Number"
var num = 12;
if (num / 2) {
    console.log("Even Number");
}

// Given the year of birth if the age is between 13 and 19 (both included) print Teenage
var year = 2005;
var age = 2021 - year;
if (age >= 3 && age <= 19) {
    console.log("Teenage");
}

// Given the age of three people A B C (all different) Print the names in ascending order of age
var A = 15;
var B = 16;
var C = 10;
if (A < B && A < C) {
    if (B < C) {
        console.log("A B C")
    } else {
        console.log("A C B")
    }
}
else if (B < C) {
    if (C < A) {
        console.log("B C A")
    }
    else {
        console.log("B A C")
    }
}
     else {
        if (A < B) {
            console.log("C A B")
        } else {
            console.log("C B A")
        }
    }










// Given two numbers A and B print which is smaller (Use ternary operator)
var one = 22;
var one2 = 12;
(one < one2) ? console.log("One is Smaller = " + one) : console.log("One2 is Smaller = " + one2);

// Given the day in short format like "Mon", "Tue" ... print in long format "Monday", "Tuesday"
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