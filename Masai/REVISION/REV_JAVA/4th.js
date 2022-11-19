// Using a while loop print the numbers in descending order from the given starting to ending limit
// Start - 20 End - 25

var start = 20;
var end = 25;
while (end >= start) {
    console.log(end);
    end--;
}


// Given a staring number and a decrement value, print all numbers from the starting number till zero deducting the decrement value each time
// Starting - 29, Decrement - 6

var start = 29;
var decre = 6;
for (var i = start; i >= 0; i = i - decre) {
    console.log(i);
}


// Pattern (Only part of it is show to get an understanding) ```
// 1.1.1 1.1.2 . . 2.1.1 . . 9.9.8 9.9.9 ```

var num = 9;
for (var i = 1; i <= num; i++) {
    for (var j = 1; j <= num; j++) {
        for (var k = 1; k <= num; k++) {
            console.log(i + "." + j + "." + k);
        }
    }
}


// Given a number and the exponent factor (integer > 0) calculate the exponential value using loops
// Num - 3, Power - 5;

var num = 3;
var power = 5;
var value = 0;

for (var i = 0; i <= num; i++) {
    value = num** power;
    console.log(value);
    break;
}



// Print all the prime numbers till the given limit
// Limit - 13

var limit = 100;

for (var i = 2; i <= limit; i++) {

    var count = 0;
    for (var j = 2; j < i; j++) {
        if (i % j == 0) {
            count = 1
        }
    }
    if (count == 0) {
        console.log(i);
    }
}



// Given a string print all the Characters in the odd position (Start counting with 0)
// Input - Masai

var input = "Windows";
for (var i = 0; i < input.length; i++) {
    if (i % 2 == 0) {
        console.log(input[i]);
    }
}



// Given a sentence print the count of words (Separated by a space character)
// Input - "A Transformation In Education"

var word = "There is a smallest natural number";
var count = 0;
for (var i = 0; i < word.length; i++) {
    if (word[i] === " ") {
        count++
    }
}
count = count + 1
console.log(count);



// Given a string print "YES" if it is a palindrome "NO" if it is not one
// A palindrome is a word which reads the same backward as forward, such as madam bob

var word = "hannah";
var newword = "";
for (var i = word.length - 1; i >= 0; i--) {
    newword = newword + word[i];
}
if (newword == word) {
    console.log("palindrome")
} else{
    console.log("not a palindrome")
}


// Given a number covert it into word format
// Input 3987
// Output - Three Nine Eight Seven

var num = 1998;
var num = num.toString();
var string = " ";
for (var i = 0; i < num.length; i++) {
    if (num[i] === "0") {
        string = string + " Zero "
    }
    else if (num[i] === "1") {
        string = string + " One "
    }
    else if (num[i] === "2") {
        string = string + " Two "
    }
    else if (num[i] === "3") {
        string = string + " Three "
    }
    else if (num[i] === "4") {
        string = string + " Four "
    }
    else if (num[i] === "5") {
        string = string + " Five "
    }
    else if (num[i] === "6") {
        string = string + " Six "
    }
    else if (num[i] === "7") {
        string = string + " Seven "
    }
    else if (num[i] === "8") {
        string = string + " Eight "
    }
    else if (num[i] === "9") {
        string = string + " Nine "
    }
}
console.log(string);



// Given an array of numbers print the sum of all the elements
// Sample Input - [1, 2, 3, 4, 5]
// Sample Output - 15

var arry = [10, 20, 30, 40, 40, 50, 50, 100];
var sum = 0;
for (var i = 0; i < arry.length; i++) {
    sum = sum + arry[i]
}
console.log(sum);


// Given an array or string print the total no of characters
// Sample Input - ["Hello", "Masai"]
// Sample Output - 10

var inpu = ["shivam", "singh"];
var count = 0;
for (var i=0;i<inpu.length;i++){
    for(var j=0;j<inpu[i].length;j++)[
        count++
    ]
}
console.log(count)


// Given an array of numbers print the average of all the odd numbers and even numbers

var arry = [1, 4, 2, 3,1,2,3,4,5,6,7,8,9, 5, 6];
var odd = 0;
var odd_count = 0;

var even = 0;
var even_count = 0;

for (var i = 0; i < arry.length; i++) {
    if (arry[i] % 2 == 0) {
        even = even + arry[i]
        even_count++
    } else {
        odd = odd + arry[i]
        odd_count++
    }
}
even_avg = even / even_count;
odd_avg = odd / odd_count;
console.log("even " + even_avg);
console.log("odd " + odd_avg);


// Given an array of string join them with a comma ,

var arry = ["HTML", "CSS", "JAVA", "JS"];
var string = " ";
for (var i = 0; i <= arry.length - 1; i++) {
    if (i === arry.length - 1) {
        string = string + arry[i]
    } else {
        string = string + arry[i] + ","
    }
}
console.log(string);


// Print the given elements of an array in reverse order

var num = ["A", "E", "I", "O", "U"];
for (var i = num.length - 1; i >= 0; i--) {
    for (var j = num[i].length - 1; j >= 0; j--) {
        console.log(num[i][j]);
    }
}


// Given an array or strings, remove the items which have less than 4 characters length and print the array


var arry = ["A", "Quick", "Brown", "Fox", "Jumps", "Over", "A", "Lazy", "Dog"];
var newarry = [];
for (var i = 0; i < arry.length; i++) {
    if (arry[i].length >= 4) {
        newarry.push(arry[i])
    }
}
console.log(newarry);






