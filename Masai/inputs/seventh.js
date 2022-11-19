// Take input from the user and print the no of characters in the input
// Sample Input - Masai
// Sample Output - 5


function runProgram(input) {

    var length = input.length
    console.log(length - 1)

}
process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
    read = read.replace(/\n$/, "")
    runProgram(read);
});

process.on("SIGINT", function () {
    read = read.replace(/\n$/, "")
    runProgram(read);
    process.exit(0);
});



// Take input from the user and print the number of digits after the decimal point
// Sample Input-1 12.63
// Sample Output-1 2
// Sample Input-2 32
// Sample Output-2 0

function runProgram(input) {

    input = input.trim().split(/[\r\n]+/)
    input = input[0].trim().split(".")
    console.log(input[1])

}
process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
    read = read.replace(/\n$/, "")
    runProgram(read);
});

process.on("SIGINT", function () {
    read = read.replace(/\n$/, "")
    runProgram(read);
    process.exit(0);
});




// Given the input of length width and height (Separated by spaces). Print the volume of the box
// Sample Input 4 2 3
// Sample Output 24

function runProgram(input) {
    var input = input.trim().split(" ").map(Number);
    var length = input[0];
    var width = input[1];
    var height = input[2];
    var valume = length * width * height
    console.log(valume);

}
process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
    read = read.replace(/\n$/, "")
    runProgram(read);
});

process.on("SIGINT", function () {
    read = read.replace(/\n$/, "")
    runProgram(read);
    process.exit(0);
});




// Given a particular date input. Print it in a human-readable format
// Sample input 2020-06-10
// Sample output 10 June, 2020

function runProgram(input) {

    var input = input.trim().split(/[\r\n]+/);
    var input = input[0].trim().split("-");
    switch (input[1]) {
        case "01":
            console.log(input[2] + " Janaury, " + input[0])
            break;
        case "02":
            console.log(input[2] + " Febuary, " + input[0])
            break;
        case "03":
            console.log(input[2] + " March, " + input[0])
            break;
        case "04":
            console.log(input[2] + " April, " + input[0])
            break;
        case "05":
            console.log(input[2] + " May, " + input[0])
            break;
        case "06":
            console.log(input[2] + " June, " + input[0])
            break;
        case "07":
            console.log(input[2] + " Julay, " + input[0])
            break;
        case "08":
            console.log(input[2] + " August, " + input[0])
            break;
        case "09":
            console.log(input[2] + " September, " + input[0])
            break;
        case "10":
            console.log(input[2] + " October, " + input[0])
            break;
        case "11":
            console.log(input[2] + " November, " + input[0])
            break;
        case "12":
            console.log(input[2] + " December, " + input[0])
            break;
    }


}
process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
    read = read.replace(/\n$/, "")
    runProgram(read);
});

process.on("SIGINT", function () {
    read = read.replace(/\n$/, "")
    runProgram(read);
    process.exit(0);
});



// Given an input of scores (separated by spaces) find the Mix and Max score
// Sample Input 12 4 1 98 26 83
// Sample Output
// Min - 1
// Max - 98

function runProgram(input) {

    var input = input.trim().split(/[\r\n]+/);
    var input = input[0].trim().split(" ").map(Number);

    var max = input[0]
    var min = input[0]
    for (var i = 0; i < input.length; i++) {
        if (max < (input[i])) {
            max = (input[i])
        }
        else if (min > (input[i])) {
            min = (input[i])
        }
    }
    console.log(min + " " + max)


}
process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
    read = read.replace(/\n$/, "")
    runProgram(read);
});

process.on("SIGINT", function () {
    read = read.replace(/\n$/, "")
    runProgram(read);
    process.exit(0);
});




// Given a city name (1st line) and the names or persons along with the city. Print the names of the people with the given city

// Sample Input :
// Bangalore
// Yogesh Bangalore
// Aman Patna
// Rahul Patna
// Prateek Mumbai
// Sandhya Bangalore
// Nrupul Hyderabad

// Sample Output :
// Yogesh
// Sandhy

function runProgram(input) {

    var input = input.trim().split(/[\r\n]+/);

    for (var i = 1; i < input.length; i++) {
        input[i] = input[i].trim().split(" ")
    }

    var city = input[0]
    for (var i = 1; i < input.length; i++) {
        if (input[i][1] === city) {

            console.log(input[i][0])
        }
    }

}
process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
    read = read.replace(/\n$/, "")
    runProgram(read);
});

process.on("SIGINT", function () {
    read = read.replace(/\n$/, "")
    runProgram(read);
    process.exit(0);
});