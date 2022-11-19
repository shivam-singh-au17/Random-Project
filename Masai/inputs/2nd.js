function runProgram(input) {

    var input = input.trim().split(/[\r\n]+/);
    var input1 = input[0].trim().split(" ").map(Number);
    var input2 = input[1].trim().split(" ").map(Number);
    var total_s1 = input1[0] + input1[1] + input1[2]
    var total_s2 = input2[0] + input2[1] + input2[2]
    if (total_s1 > total_s2) {
        console.log("First")
    } else if (total_s1 < total_s2) {
        console.log("Second")
    } else if (input1[2] > input2[2]) {
        console.log("First")
    } else if (input1[2] < input2[2]) {
        console.log("Second")
    } else if (input1[0] > input2[0]) {
        console.log("First")
    } else if (input1[0] < input2[0]) {
        console.log("Second")
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