function runProgram(input) {

    var input = input.trim().split(/[\r\n]+/);
    var input1 = input[0].trim().split(",").map(Number);
    var input2 = input[1].trim().split(",").map(Number);
    var d_milk1 = input1/5
    var d_milk2 = input2/5
    var shots1 = input1/2
    var shots2 = input2/2
    var ecla1 = input1/1
    var ecla2 = input2/1
    if (d_milk1 >= d_milk2) {
           console.log("Dairy Milk") 
    } else if (shots1 >= shots2) {
        console.log("Shots")
    } else if (ecla1 >= ecla2) {
        console.log("Eclairs")
    } else {
        console.log("No Chocolates")
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