function runProgram(input) {

    var input = input.trim().split(/[\r\n]+/);
    var input1 = input[1].trim().split(" ").map(Number);
    var input_0 = [];
    for (var i = 0; i < input1.length; i++) {
        if (input1[i] == 42) {
            input_0.push(input1[i])
        }
    }
    var new_input = input_0
    if (new_input == 42) {
        console.log("Yes")
    } else {
        console.log("No")
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