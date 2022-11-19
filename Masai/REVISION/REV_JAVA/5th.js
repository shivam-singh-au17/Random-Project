// Given a number write a function to find if it is divisible by 5

function divBy5(num) {
    if (num % 5 == 0) {
        return true
    } else {
        return false
    }
}
console.log(divBy5(100));

// Use the function in the above statement find the sum of multiples of 5 till the given limit

var limit = 25;
var sum = 0;
for (var i = 0; i <= limit; i++) {
    if (divBy5(i)) {
        sum = sum + i;
    }
}
console.log(sum);

// Given a single character in upper case convert to lower case (Don't use inbuilt functions)

var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";
function uprTolor(input) {
    for (var i = 0; i < upper.length; i++) {
        if (upper[i] == input) {
            return lower[i];
        }
    }
    return (input)
}
console.log(uprTolor("S"));
console.log(uprTolor("H"));
console.log(uprTolor("I"));
console.log(uprTolor("V"));
console.log(uprTolor("A"));
console.log(uprTolor("M"));

// Write a function to check if a number is not a prime 

function toChekPrime(input) {
    var factor = 0;
    for (var i = 0; i <= input; i++) {
        if (input % i == 0) {
            factor++
        }
    }
    if (factor > 2) {
        return true;
    } else {
        return false;
    }
}
console.log(toChekPrime(27));
console.log(toChekPrime(25));

// Given an array of numbers find how many times the minimum value occurs


var nums = [4, 5, 6, 7, 8, 9, 10, 4, 5, 6];
function lowElement(input) {
    var low = input[0];
    for (var i = 1; i < input.length; i++) {
        if (input[i] < low) {
            low = input[i];
        }
    }
    return low;
}

function findOccurances(input, match) {
    var count = 0;
    for (var i = 0; i < input.length; i++) {
        if (input[i] == match) {
            count++
        }
    }
    return count;
}

var low_elem = lowElement(nums);
var low_count = findOccurances(nums, low_elem);
console.log(low_count);

// Given a string remove the consonants from the string

var vovels = "aeiouAEIOU";
function isVovels(input) {
    for (var i = 0; i < vovels.length; i++) {
        if (vovels[i] == input) {
            return true
        }
    }
    return false
}
var names = "Shivam Singh Masai School";
var out = "";
for (var i = 0; i < names.length; i++) {
    if (isVovels(names[i]) || names[i] == " ") {
        out = out + names[i];
    }
}
console.log(out);



// Given a number write a function to find if it is divisible by 7

function divBy7(input) {
    if (input % 7 == 0) {
        return true
    } else {
        return false
    }
}
console.log(divBy7(13));

// Use the function in the above statement find the average of multiples of 7 till the given limit

var limit = 15;
var sum = 0;
for (var i = 0; i <= limit; i++) {
    if (divBy7(i)) {
        sum = sum + i;
    }
}
// console.log(sum);
var avg = sum / limit
console.log(avg);

// Given a word in upper case convert to lower case (Don't use inbuilt functions)

var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";
function uperTolowr(input) {
    for (var i = 0; i < upper.length; i++) {
        if (upper[i] == input) {
            return lower[i]
        }
    }
    return input
};
console.log(uperTolowr("S"));
console.log(uperTolowr("O"));
console.log(uperTolowr("N"));
console.log(uperTolowr("A"));
console.log(uperTolowr("M"));

// Write a function to remove even numbers from the given array of numbers

var arry = [2, 3, 4, 5, 6, 7, 8, 9];
function rmvArry(input) {
    var newarry = "";
    for (var i = 0; i < arry.length; i++) {
      if (arry[i] %2 != 0) {
          newarry = newarry+arry[i]
      }
    }
    return input
}
console.log(rmvArry(arry));


// Given an array of numbers find how many times the minimum and maximum value occurs

var arry = [2, 3, 4, 5, 6, 7, 7, 6, 5, 4, 3, 2, 7];
function highValu(input) {
    var hig = input[0];
    for (var i = 1; i <= input.length; i++) {
        if (arry[i] > hig) {
            hig = arry[i]
        }
    }
    return hig
}

function lowValu(input) {
    var low = input[0];
    for (var i = 1; i <= input.length; i++) {
        if (arry[i] < low) {
            low = arry[i]
        }
    }
    return low
}

function findOccur(input, match) {
    var count = 0;
    for (var i = 0; i < input.length; i++) {
        if (input[i] == match) {
            count++
        }
    }
    return count;
}
var high_emt = highValu(arry);
var low_elmt = lowValu(arry);
var hig_ocr = findOccur(arry, high_emt);
var low_ocr = findOccur(arry, low_elmt);
console.log("high occur. value is = " + hig_ocr);
console.log("low occur. value is = " + low_ocr);

// Given a string remove a given character from the string

var string = "SHIVAMsingh";
function remvChar(input) {
    for (var i = 0; i < string.length; i++) {
        if (string[i] == input) {
            return true;
        }
    }
    return false;
}
var names = "SAURABH SHivam singh patel"
var out = " ";
for (var i = 0; i < names.length; i++) {
    if (!remvChar(names[i] || names[i] == " ")) {
        out = out + names[i];
    }
}
console.log(out)
