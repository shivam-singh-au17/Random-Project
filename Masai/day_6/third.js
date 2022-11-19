// Given a number using a while loop print if its a Prime Number or Not


var num = 12;
var count = 0;
var i = 2

while (i < num) {
    if (num % i === 0) {
        console.log("Not prime");
        break;
    }
    else {
        count++
    }
    i++
}
if (count + 2 === num) {
    console.log("Prime")
}




// Print the average of all the numbers starting from 0 to the given limit that are multiples of 3 


var lim = 10;
var tot = 0;
for (var i = 1; i <= lim; i++) {
    if (i % 3 == 0) {
        tot = tot + i
    }
}
var avg = tot / lim;
console.log(avg);





// Print the sum of all odd and even numbers separately from a given starting and ending limit



var l = 10;
var sum = 0;
for (i = 0; i <= l; i++) {
    if (i % 2 == 0) {
        sum = sum + i;
    }
}
console.log("Sum of 0 to 10 all even number is " + sum);


var l = 10;
var sum = 0;
for (i = 0; i <= l; i++) {
    if (i % 2 != 0) {
        sum = sum + i;
    }
}
console.log("Sum of 0 to 10 all odd number is " + sum);





// Given an array of game, scores print the lowest and highest score



var score = [901, 56, 152, 45, 88, 187];
var low = score[0];
for (var i = 1; i < score.length; i++) {
    if (score[i] < low) {
        low = score[i]
    }
}
console.log("Low score is " + low);


var score = [901, 56, 152, 45, 88, 187];
var high = score[0];
for (var i = 1; i < score.length; i++) {
    if (score[i] > high) {
        high = score[i]
    }
}
console.log("High score is " + high);



// Given a number using a for loop print if its a Prime Number or Not

var num = 37;
var count = 0;

for (var i = 2; i < num; i++) {
    if (num % i === 0) {
        console.log("Not prime");
        break;
    }
    else {
        count++
    }
}
if (count + 2 === num) {
    console.log("Prime")
}






//Given an array of strings count the number of Vowels and Consonants present





var names = ['shivam', 'singh', 'saurabh'];
var total_c = 0;
for (var i = 0; i < names.length; i++) {
    for (var j = 0; j < names[i].length; j++) {
        if (names[i][j] != 'a' && names[i][j] != 'e' && names[i][j] != 'i' && names[i][j] != 'o' && names[i][j] != 'u') {
            total_c++;
        }
    }
}
console.log("Total consonent is " + total_c);




var names = ['shivam', 'singh', 'saurabh'];
var total_c = 0;
for (var i = 0; i < names.length; i++) {
    for (var j = 0; j < names[i].length; j++) {
        if (names[i][j] == 'a' || names[i][j] == 'e' || names[i][j] == 'i' || names[i][j] == 'o' || names[i][j] == 'u') {
            total_c++;
        }
    }
}
console.log("Total vovales is " + total_c);