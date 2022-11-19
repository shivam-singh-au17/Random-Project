// Given two numbers A and B print which is smaller    

var a = 12;
var b = 14;
if (a < b) {
    console.log(a);
} else {
    console.log(b);
}

// Given two passwords print "Wrong Password" if both the passwords doesn't match

var a1 = 12;
var b1 = 14;
if (a1 != b1) {
    console.log("Wrong Password");
} else {
    false
}

// Given a number if it is odd print "Odd Number"
var a2 = 13;
if (a2 % 2 == 1) {
    console.log("Odd Number");
}

// Given the year of birth if the age is between 20 and 29 (both included) print Twenties


var year = 1997;
var age = 2021 - year;
if (age > 20 && age < 29) {
    console.log("Twenties");
}

// Given the year of birth, if the age is between 13 and 19 (both included) print Teenage and in between 20 and 29 (both included) print Twenties

var year = 2005;
var age = 2021 - year;
if (age > 20 && age < 29) {
    console.log("Twenties");
}
else if (age > 13 && age < 19) {
    console.log("Teenage");
}

// Given the age of three people A B C (all different) Print the names in descending order of age

var A = 1040;
var B = 1121;
var C = 122;
if (A > B && A > C) {
    if (B > C) {
        console.log("ABC")
    } else {
        console.log("ACB")
    }
}
else if (B > C) {
    if (C > A) {
        console.log("BCA")
    } else {
        console.log("BAC")
    }
}
else {
    if (A > B) {
        console.log("CAB")
    } else {
        console.log("CBA")
    }
}

// Given two numbers A and B print which is greater (Use ternary operator)

var a = 143;
var b = 18;
(a > b) ? console.log(a) : console.log(b);

// Given the day in long format like "Monday", "Tuesday" ... print in short format "Mon", "Tue"

var day = "Wednesday";
switch (day) {
    case "Monday":
        console.log("Mon");
        break;
    case "Tuesday":
        console.log("Tue");
        break;
    case "Wednesday":
        console.log("Wed");
        break;
    case "Thursday":
        console.log("Thu");
        break;
    case "Friday":
        console.log("Fri");
        break;
    case "Saturday":
        console.log("Sat");
        break;
    case "Sunday":
        console.log("Sun");
        break;
    default:
        console.log("Wrong Day");
        break;
}



// If the given year is a leap year print "LEAP YEAR" and if it's not a leap year print "NOT LEAP YEAR"
// Screenshot showing the output for the years 2012 and 2014
var year = 2004;
if (year % 4 == 0) {
    console.log("LEAP YEAR")
} else {
    console.log("NOT LEAP YEAR")
}

// Give a single character (small or upper case) if it is a Vowel print "V" in the case of consonant print "C"

var char = "I";
if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u" || char == "A" || char == "E" || char == "I" || char == "O" || char == "U") {
    console.log("V")
} else {
    console.log("C")
}

// Give a string of PIN Code (with all digits) print "VALID" or "INVALID" (a PIN code is only valid if it has 6 digits)

var pin_code = 123456;
if (pin_code > 99999 && pin_code < 1000000) {
    console.log("VALID")
} else {
    console.log("INVALID")
}

// Calculate the total discount for a coupon based on the below conditions To attract customers, you are giving a discount. You want to give 10% of the total sale price. But you have also said that Rs. 100 is the maximum discount that a customer can get. The minimum you need to purchase is Rs. 300.

var sp = 301;
var dis = 0.1;
var dis_p = sp * dis;

if (sp < 300) {
    console.log("You have no discount because minimum purchase price is 300");
}
else if (sp >= 300 && dis_p <= 100) {
    console.log("You find only discount is " + dis_p + "rs");
}
else if (dis_p > 100) {
    console.log("You find only discount is 100 rs")
}