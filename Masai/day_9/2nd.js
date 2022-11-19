// Given a number write a function to find if it is divisible by 7

function divBy7(input) {
    if (input % 7 == 0) {
        return true;
    }
    return false;
}
console.log(divBy7(21));
console.log(divBy7(55));
console.log(' ')



// Use the function in the above statement find the average of multiples of 7 till the given limit

var limit = 15;
var sum = 0;
for (var i = 0; i <= limit; i++) {
    if (divBy7(i)) {
        sum = sum + i;
        avg = sum / limit;
    }
}
console.log(avg);
console.log(' ')



// Given a word in upper case convert to lower case (Don't use inbuilt functions)

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
var word = "SHIVAM";
var output = "";
for (var i = 0; i < word.length; i++) {
    var lower_c = toLower(word[i])
    output = output + lower_c;
}
console.log(output);
console.log(' ')



// Write a function to remove even numbers from the given array of numbers

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function rmvEvenNum(arr) {
    if (arr.length % 2 == 0) {
        return 
    }
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum = arr[i]
    }
    var average = arr.length - sum
    return average
}
console.log(rmvEvenNum(arr));

console.log(" ")


// Given an array of numbers find how many times the minimum and maximum value occurs

var nums = [5, 6, 7, 8, 9, 9, 8, 7, 6, 5];
function lowElmt(input) {
    var low = input[0];
    for (var i = 1; i < input.length; i++) {
        if (input[i] < low) {
            low = input[i];
        }
    }
    return low;
}

function maxElmt(input) {
    var hig = input[0];
    for (var i = 1; i < input.length; i++) {
        if (input[i] > hig) {
            hig = input[i];
        }
    }
    return hig;
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
var max_Elmt = maxElmt(nums);
var low_elem = lowElmt(nums);
var low_count = findOccurances(nums, low_elem);
console.log(low_count);
var max_count = findOccurances(nums, max_Elmt);
console.log(max_count);
console.log(' ')



// Given a string remove a given character from the string

var str = 'shivamSINGH';
function isCHAR(input) {
    for (var i = 0; i < str.length; i++) {
        if (str[i] == input) {
            return true;
        }
    }
    return false;
}
var nams = " Shivam Singh Masai School"
var out = ""
for (var i = 0; i < nams.length; i++) {
    if (!isCHAR(nams[i]) || nams[i] == " ") {
        out = out + nams[i];
    }
}
console.log(out);
console.log(' ')
