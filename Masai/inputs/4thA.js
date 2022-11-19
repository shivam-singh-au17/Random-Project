function runProgram(input) {

    // var input = input.trim().split(/[\r\n]+/);
    // var input = input.trim().split(/[\r\n]+/).map(Number);

    // var input = input.trim().split(" ");
    // var input = input.trim().split(" ").map(Number);

    var input = input.trim().split(/[\r\n]+/);
    var input2 = input[1].trim().split(" ").map(Number);
    var sum = 0;
    for (var i = 0; i < input2.length; i++) {
        if (i % 2 == 0) {
            sum = sum + input2[i]
        }
    }
    console.log(sum)
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

