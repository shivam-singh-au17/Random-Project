// var str = 29;
// var dtr = 6;

// for (var i = str; i >= 0; i = i - dtr) {
//     console.log(i);
// }




// var num = 9;

// for (var i = 1; i <= 9; i++) {
//     for (var j = 1; j <= 9; j++) {
//         for (var k = 1; k <= 9; k++) {
//             console.log(i + "." + j + "." + k);
//         }
//     }
// }


// var num1 = 5;
// var power = 3;
// while (i = num1 ** power) {
//     console.log(i)
//     break;
// }


// var num = 100

// for (var i = 2; i <= num; i++) {
//     var signal = 0
//     for (var j = 2; j < i; j++) {
//         if (i % j == 0) {
//             signal = 1
//         }
//     }
//     if (signal == 0) {
//         console.log(i + "prime")
//     }
// }



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


var str = "Windows"
for (var i = 0; i < str.length; i++)
    if (i % 2 === 1) {
        console.log(str[i]);
    }




var str = "There is a smallest natural number";
var count = 0;
for (var i = 0; i < str.length; i++) {
    if (str[i] === " ") {
        count++
    }
}
count = count + 1
console.log("word count is " + count)


var word = "hannah"
var newword = ""

for (var i = word.length - 1; i >= 0; i--) {
    newword = newword + word[i]
}

if (word === newword) {
    console.log("palindrome")
}
else {
    console.log("not a palindrome")
}



var num = 7;
num = num.toString()
var string = " "

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
        string = string + " three "
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



var num = [34, -87, 23, 12, 98, -2, 0];
var sum = 0

for (var i = 0; i < num.length; i++) {
    sum = sum + num[i]
}
console.log(sum)



var arr = ["HTML", "CSS", "JAVA", "JS", "ANDROID"];
var count = 0

for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
        count++
    }
}
console.log(count);






var arr =  [34, -87, 23, 12, 98, -2, 0]

var odd = 0;
var odd_count = 0;

var even = 0;
var even_count = 0;

for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        even = even + arr[i]
        even_count++
    }
    else {
        odd = odd + arr[i]
        odd_count++
    }
}

odd = odd / odd_count
even = even / even_count

console.log("Odd Average - " + odd);
console.log("Even Average - " + even);



var arr = ["Quick", "Brown", "Fox"];
var string = ""
for (var i = 0; i <= arr.length - 1; i++) {
    if (i === arr.length - 1) {
        string = string + arr[i];
    }
    else {
        string = string + arr[i] + ","
    }
}
console.log(string);




var num = ["A", "E", "I", "O", "U"];
var count = 0;

for (var i = num.length - 1; i >= 0; i--) {
    for (var j = num[i].length - 1; j >= 0; j--) {
        console.log(num[i][j]);
    }
}





var arr = ["A", "Quick", "Brown", "Fox", "Jumps", "Over", "A", "Lazy", "Dog"]
var newarry = []

for (var i = 0; i < arr.length; i++) {
    if (arr[i].length >= 4) {
        newarry.push(arr[i])
    }
}
console.log(newarry)



