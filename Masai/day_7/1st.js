// Print "Masai School" and "Welcome" on the console in two different lines
var name1 = "Masai School";
var name2 = "Welcome";
console.log(name1);
console.log(name2);

// Print your age from the year of birth
var date = 2;
var month = "January";
var year = 1999;
console.log(date + " " + month + " " + year);

var d_o_y = 1999;
var age = 2021 - d_o_y;
console.log(age);

// Create a variable called name use it to print your name, your father's name and your mother's name
var name4 = "Shivam Singh";
console.log(name4);
var name5 = "Badri Prasad Singh";
console.log(name5);
var name6 = "Saraswati Devi Singh";
console.log(name6);

// Given the side of the square calculate its area and and perimeter

var side = 5;
console.log("Area of square is " + (side * side));
console.log("Perimeter of square is " + (side * 4));

// Given three variable print their sum and product
var num1 = 4;
var num2 = 8;
var num3 = 6;
console.log("Sum of variable is " + (num1 + num2 + num3));
console.log("Product of variable is " + (num1 * num2 * num3));

// Given a number find its square and square root
var num = 14;
console.log(" square of number is " + (num * num));
console.log(" square root of number is " + (num ** 0.5));

// Given two numbers in string format find their sum, product and difference
var num11 = "12";
var num13 = "19";
console.log("Sum is " + (num11 + num13));
console.log("Product is " + (num11 * num13));
console.log("Difference is " + (num11 - num13));

// Given the certain number of chocolates and pencils find the number of chocolates and pencils left behind if equally distributed between 4 children
var choc = 13;
var pen = 15;
var child = 4;
console.log('Chocolates left = ' + (choc % 4));
console.log('Pencils left = ' + (pen % 4));

// Given all the incomes and expenses from various sources find the total remaining amount
 var income = 1000000;
 var food = 50000;
 var shoping = 100000;
 var rent = 60000;
 var lone = 200000;
 console.log("Remaining Amount is = " + (income - (food+ shoping + rent + lone)));





 var Total_months = 25;
var Total_rem = (Total_months % 12);
var totalyr = (Total_months - Total_rem) / 12;
console.log("Total year is " + ( totalyr) + " Total rem months is " + Total_rem);
