function runProgram(input) {

    var input = input.trim().split(/[\r\n]+/);
    var input1 = input[0].trim().split(" ").map(Number);
    var input2 = input[1].trim().split(" ").map(Number);
    console.log(input1)
    console.log(input2)
    if (input1[0] < input2[0]) {
        console.log("England")
    } else if (input1[0] > input2[0]) {
        console.log("New Zealand")
    } else if (input1[1] < input2[1]) {
        console.log("England")
    } else if (input1[1] > input2[1]) {
        console.log("New Zealand")
    } else if (input1[2] < input2[2]) {
        console.log("England")
    } else if (input1[2] > input2[2]) {
        console.log("New Zealand")
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