var a = 20 > 10;
var b = 20 < 10;
var c = 20 >= 10;
var d = 20 <= 10;
console.log(a);
console.log(b);
console.log(c);
console.log(d);

var e = 1;
var f = 1;
console.log(e == f);

var aa = 1;
var bb = "1";
console.log(aa == bb);

var aa = 1;
var bb = "1";
console.log(aa === bb);
console.log(aa != bb);
console.log(aa !== bb);

var qq = 1;
var ww = 1;
console.log(qq == ww);
console.log(qq != ww);
var qq = 2;
console.log(qq == ww);
console.log(qq != ww);
console.log("");
console.log("");
console.log("");




var name = "Shivam";
if (name === 'Shivam') {
    console.log("Welcome Shivam");
}
console.log("");


var age = 32;
if (age < 32) {
    console.log("Less than 30");
}
if (age >= 30) {
    console.log("Greatar or Equal to 30");
}
console.log("");


var age = 5;
if (age < 10) {
    console.log("Less than 10");
}
else if (age < 20) {
    console.log("Less than 20");
}
else if (age < 30) {
    console.log("Less than 30");
}
else {
    console.log("Greatar than or equal to 30");
}
console.log("");


var age = 15;
if (age < 10) {
    console.log("Less than 10");
}
else if (age < 20) {
    console.log("Less than 20");
}
else if (age < 30) {
    console.log("Less than 30");
}
else {
    console.log("Greatar than or equal to 30");
}
console.log("");


var age = 25;
if (age < 10) {
    console.log("Less than 10");
}
else if (age < 20) {
    console.log("Less than 20");
}
else if (age < 30) {
    console.log("Less than 30");
}
else {
    console.log("Greatar than or equal to 30");
}
console.log("");


var age = 35;
if (age < 10) {
    console.log("Less than 10");
}
else if (age < 20) {
    console.log("Less than 20");
}
else if (age < 30) {
    console.log("Less than 30");
}
else {
    console.log("Greatar than or equal to 30");
}
console.log("");


var age = 35;
var gender = "Male";
if ((age > 30) || (gender == "Male")) {
    console.log("Male above 30");
}
console.log("");


var a = 5;
var b = 6;
if (a > b) {
    console.log("Yes");
}
else {
    console.log("No");
}
console.log("");

(a > b) ? console.log("Yes") : console.log("No");
console.log("");


 var day = 5;
// if (day = 0) {
//     console.log("Sunday");
// }
// else if (day = 1) {
//     console.log("Monday");
// }
// else if (day = 2) {
//     console.log("Thusday");
// }
// else if (day = 3) {
//     console.log("Wednesday");
// }
// else if (day = 4) {
//     console.log("Thursday");
// }
// else if (day = 5) {
//     console.log("Friday");
// }
// else if (day = 6) {
//     console.log("Saterday");
// }
// console.log("");


switch (day) {
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Thusday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saterday");
        break;

    default:
        console.log("None")
        break;
}
console.log("");

var aa = 1;
var bb = "1";
console.log(aa === bb);