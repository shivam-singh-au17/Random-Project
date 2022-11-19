// Define a variable limit Print "Masai School" using for loop the no of times the value assigned to the variable limit

for (var i = 0; i < 10; i++) {
    console.log("Masai School")
}


// Print the sum of all the numbers starting from 0 to the given limit that are multiples of 3

var limit = 10;
var sum = 0;
for (var i = 0; i < limit; i++) {
    // console.log(i);
    if (i % 3 == 0) {
        sum = sum + i;
    }
}
console.log(sum);



// Given a number print the below set of pattern (Sample for input 3) ```
// 1.1 2.1 2.2 3.1 3.2 3.3

var numb = 3;
for (var i = 0; i <= numb; i++) {
    for (var j = 1; j <= i; j++) {
        console.log(i + "." + j);
    }
}


// Given an array of game, scores print the lowest score

var score = [10, 20, 3, 40, 5, 60, 70, 80,];
var lowest = score[0];
for (var i = 0; i < score.length; i++) {
    if (score[i] < lowest) {
        lowest = score[i]
    }
}
console.log(lowest);



// Given an array of strings count the number of Consonants present

var arry = ["shivam", "singh"];
var cont = 0;
for (var i = 0; i < arry.length; i++) {
    for (var j = 0; j < arry[i].length; j++) {
        if (arry[i][j] != "a" && arry[i][j] != "e" && arry[i][j] != "i" && arry[i][j] != "o" && arry[i][j] != "u") {
            cont++
        }
    }
}
console.log(cont);



// Given a number using a while loop print if its a Prime Number or Not

var num = 41;
var count = 0;
var i = 2;
while (i < num) {
    if (num % i === 0) {
        console.log("Not Prime");
        break;
    }
    else {
        count++
    }
    i++
}
if (count + 2 === num) {
    console.log("prime");
}


// Print the average of all the numbers starting from 0 to the given limit that are multiples of 3

var limit = 10;
var total = 0;
for (i = 0; i <= limit; i++) {
    if (i % 3 == 0) {
        total = total + i;
    }
}
var avg = total / limit;
console.log(avg);


// Print the sum of all odd and even numbers separately from a given starting and ending limit

var starting = 5;
var ending = 10;
var sum = 0;
for (var i = starting; i <= ending; i++) {
    if (i % 2 == 0) {
        sum = sum + i
    }
}
console.log("Even" + sum);

var starting = 5;
var ending = 10;
var sum = 0;
for (var i = starting; i <= ending; i++) {
    if (i % 2 != 0) {
        sum = sum + i
    }
}
console.log(sum);


// Given an array of game, scores print the lowest and highest score

var scores = [2, 3, 4, 5, 6, 7, 8, 9];
var high = scores[0];
for (var i = 0; i < scores.length; i++) {
    if (scores[i] > high) {
        high = scores[i]
    }
}
console.log(high);

var scores = [2, 3, 4, 5, 6, 7, 8, 9];
var low = scores[0];
for (var i = 0; i < scores.length; i++) {
    if (scores[i] < low) {
        low = scores[i]
    }
}
console.log(low);



// Given a number using a for loop print if its a Prime Number or Not

var num = 18;
var count = 0;
for (var i = 2; i < num; i++) {
    if (num % i === 0) {
        console.log("NOT PRIME");
        break;
    }
    else {
        count++
    }
}
if (count + 2 === num) {
    console.log("PRIME");
}


// Given an array of strings count the number of Vowels and Consonants present

var arry = ["saurabh", "SINGH", "shivam", "rAvi"];
var Cons_count = 0;
for (var i = 0; i < arry.length; i++) {
    for (var j = 0; j < arry[i].length; j++) {
        if (arry[i][j] != "a" && arry[i][j] != "e" && arry[i][j] != "i" && arry[i][j] != "o" && arry[i][j] != "u" && arry[i][j] != "A" && arry[i][j] != "E" && arry[i][j] != "I" && arry[i][j] != "O" && arry[i][j] != "U") {
            Cons_count++
        }

    }

}
console.log("Consonants = " + Cons_count);


var arry = ["saurabh", "SINGH", "shivam", "rAvi"];
var vovels_count = 0;
for (var i = 0; i < arry.length; i++) {
    for (var j = 0; j < arry[i].length; j++) {
        if (arry[i][j] == "a" || arry[i][j] == "e" || arry[i][j] == "i" || arry[i][j] == "o" || arry[i][j] == "u" || arry[i][j] == "A" || arry[i][j] == "E" || arry[i][j] == "I" || arry[i][j] == "O" || arry[i][j] == "U") {
            vovels_count++
        }

    }

}
console.log("Vovels = " + vovels_count);
