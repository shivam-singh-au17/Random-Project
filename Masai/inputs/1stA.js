function runProgram(input) {

    var input = input.trim().split(/[\r\n]+/);
    var input1 = input[1].trim().split(" ").map(Number);
    // var input = input.trim().split(/[\r\n]+/).map(Number);

    // var input = input.trim().split(" ");
    // var input = input.trim().split(" ").map(Number);
    var sum = 0;
    for (var i = 0; i < input1.length; i++) {
        sum = sum + input1[i]
    }
    if (sum > 100) {
        console.log("Greater")  
    } else if () {
        console.log("Lesser")
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