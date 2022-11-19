// Take input from the user and print the no of characters in the input

function runProgram(input){
    // Write code here
    var length = input.length - 1
    console.log(length)
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
    read = read.replace(/\n$/,"")
   runProgram(read);
});

process.on("SIGINT", function () {
    read = read.replace(/\n$/,"")
    runProgram(read);
    process.exit(0);
});

// Given an input of scores (separated by spaces) find the Mix and Max score

function runProgram(input) {
    var arr = input.trim().split(/[\r\n]+/)
    arr = arr[0].trim().split(" ")

    var max = arr[0]
    var min = arr[0]
    for (var i = 0; i < arr.length; i++) {
        if (max < Number(arr[i])) {
            max = Number(arr[i])
        }
        else if (min > Number(arr[i])) {
            min = Number(arr[i])
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

// Given the input of length width and height (Separated by spaces). Print the volume of the box

function runProgram(input) {
    var arr = input.trim().split(/[\r\n]+/)
  arr = arr[0].trim().split(" ")
  console.log(Number(arr[0]) * Number(arr[1]) * Number(arr[2]))
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
function runProgram(input) {
    var arr = input.trim().split(/[\r\n]+/)

    arr = arr[0].trim().split("-")

    switch (arr[1]) {
        case "01":
            console.log(arr[2] + " Janaury, " + arr[0])
            break;
        case "02":
            console.log(arr[2] + " Febuary, " + arr[0])
            break;
        case "03":
            console.log(arr[2] + " March, " + arr[0])
            break;
        case "04":
            console.log(arr[2] + " April, " + arr[0])
            break;
        case "05":
            console.log(arr[2] + " May, " + arr[0])
            break;
        case "06":
            console.log(arr[2] + " June, " + arr[0])
            break;
        case "07":
            console.log(arr[2] + " Julay, " + arr[0])
            break;
        case "08":
            console.log(arr[2] + " August, " + arr[0])
            break;
        case "09":
            console.log(arr[2] + " September, " + arr[0])
            break;
        case "10":
            console.log(arr[2] + " October, " + arr[0])
            break;
        case "11":
            console.log(arr[2] + " November, " + arr[0])
            break;
        case "12":
            console.log(arr[2] + " December, " + arr[0])
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

// Given a city name (1st line) and the names or persons along with the city. Print the names of the people with the given city

function runProgram(input) {
    input = input.trim().split(/[\r\n]+/)
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

// Take input from the user and print the number of digits after the decimal point

function runProgram(input) {
    input = input.trim().split(/[\r\n]+/)
        input = input[0].trim().split(".")
        console.log(input[1].length)
  
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