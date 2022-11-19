// Define a variable limit Print "Masai School" using for loop the no of times the value assigned to the variable limit



var limit = 8;
for (var i = 0; i < limit; i++) {
    console.log("Masai School");
}



// Print the sum of all the numbers starting from 0 to the given limit that are multiples of 3




var l = 10;
var sum = 0;
for (i = 0; i <= l; i++) {
    if (i % 3 == 0) {
        sum = sum + i;
    }
}
console.log(sum);






// Given a number print the below set of pattern (Sample for input 3) ```
// 1.1 2.1 2.2 3.1 3.2 3.3

// ```



var num = 3;

for (var i = 0; i <= num; i++) {
    for (var j = 1; j <= i; j++) {
        console.log(i + "." + j)
    }
}




// Given an array of game, scores print the lowest score


var score = [90, 10, 12, 45, 8, 187];

var low = score[0];
for (var i = 1; i < score.length; i++) {
    if (score[i] < low) {
        low = score[i]
    }
}

console.log(low);



// Given an array of strings count the number of Consonants present



var names = ["SHIVAM", "SINGH", "SAURABH"];
var total_c = 0;
for (var i = 0; i < names.length; i++) {
    for (var j = 0; j < names[0].length; j++); {
        if (names[0][j] != "A" && names[0][j] != "E" && names[0][j] != "I" && names[0][j] != "O" && names[0][j] != "U") {
            total_c++;
        }
    }
}
console.log(total_c);