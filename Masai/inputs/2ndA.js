function runProgram(input) {

    // var input = input.trim().split(/[\r\n]+/);
    // var input = input.trim().split(/[\r\n]+/).map(Number);

    // var input = input.trim().split(" ");
    // var input = input.trim().split(" ").map(Number);

    var input = Number(input);
    var newinput = [];
    for (var i = 1; i <= input; i++) {
        // console.log(i)
        if (i % 2 == 0) {
            newinput.push(i)
        }
    }
    sum = 0;
    for (var i = 0; i < newinput.length; i++) {
        sum = sum + newinput[i]
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