
var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNIPQRSTUVWXYZ";
function toLower(input) {
    for (var i = 0; i < upper.length; i++) {
        if (upper[i] === input) {
            return lower[i];
        }
    }
    return input
}
var word = "SHIVAM SINGH MASAI SCHOOL";
var output = "";
for (var i = 0; i < word.length; i++) {
    var lower_c = toLower(word[i])
    output = output + lower_c;
}
console.log(output);








var arr =  [-12, -39, 12, 41, 22, 44];

function calculatAvg(arr) {
    if (arr.length == 0) {
        return 0
    }
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i]
    }
    var average = sum / arr.length
    return average
}
console.log(calculatAvg(arr));








var number1 = -24;
var number2 = -56;

function absDiff(number1, number2) {
    if (number1 > number2) {
        return number1 - number2
    }
    else {
        return number2 - number1
    }
}
console.log(absDiff(number1, number2));










function isOdd(num) {
    if (num % 2 === 1) {
        return true
    } else {
        return false
    }
}

var limit = 25;
for (var i = 0; i < limit; i++) {
    if (isOdd(i)) {
        console.log(i);
    }
}








var lower1 = "abcdefghijklmnopqrstuvwxyz";
var lower2 = "zyxwvutsrqponmlkjihgfedcba";
function toMirror(input) {
    for (var i = 0; i < lower2.length; i++) {
        if (lower2[i] === input) {
            return lower1[i];
        }
    }
    return input
}
// console.log(toLower("z"))

var word = "ayzb";
var output = "";
for (var i = 0; i < word.length; i++) {
    var lower_c = toMirror(word[i])
    output = output + lower_c;
}
console.log(output);











function addNumbers(number1, number2) {
    return number1+number2;
}
var num = [-8, -4, -21];
var sum = 0;
for (var i = 0; i < num.length; i++) {
    sum = sum + num[i]
}
console.log(sum)

