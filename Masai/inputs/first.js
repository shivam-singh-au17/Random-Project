function runProgram(input) {

    // var input = input.trim().split(/[\r\n]+/);
    // var input = input.trim().split(/[\r\n]+/).map(Number);

    // var input = input.trim().split(" ");
    var input = input.trim().split(" ").map(Number);
    var sum = 0;
    for (var i = 0; i <= input.length; i++) {
        sum = (input[0] + input[1] * 2 + input[2] * 3 + input[3] * 4 + input[4] * 6);
        // console.log(i);
    }

    // console.log(input[0]);
    console.log(sum);



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