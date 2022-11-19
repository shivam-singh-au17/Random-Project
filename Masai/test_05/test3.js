function runProgram(input) {

    var input = input.trim().split(/[\r\n]+/);
    var input1 = input[0].trim().split(",");
    var input2 = input[1].trim().split(",");
    var input2A = input2[0].trim().split(" ").map(Number);
    var newarry = Number(input1)

    for (var i = 1; i <= input2A[i]; i++) {
        console.log(3+2)
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