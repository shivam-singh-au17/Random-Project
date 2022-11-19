function runProgram(input) {

    var input = input.trim().split(/[\r\n]+/);
    var input1 = input[0].trim().split(" ").map(Number);
    var input2 = input[1].trim().split(" ").map(Number);
    // var input = input.trim().split(/[\r\n]+/).map(Number);

    // var input = input.trim().split(" ");
    // var input = input.trim().split(" ").map(Number);

    if (input2[0] > input1[0] && input2[1] > input1[1]) {
        console.log("Uplod")
    } else if (input2[0] >! input1[0] && input2[1] > input1[1]) {
        console.log("Increase Length")
    } else if (input2[0] > input1[0] && input2[1] >! input1[1]) {
        console.log("Increase Width")
    }
    // console.log(input1)
    // console.log(input2)
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

