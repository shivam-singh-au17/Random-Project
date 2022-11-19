function runProgram(input) {

    var input = input.trim().split(/[\r\n]+/);
    var input3 = input[2].trim().split(",").map(Number);
    var input2 = input[1].trim().split(",");
    var input2A = input2[0].trim().split(" ").map(Number);
    var even = []
    for (var i = 0; i < input2A.length; i++) {
        if (input2A[i] % 2 == 0) {
            even.push(input2A[i])
        }
    }
    var evenlength = even.length
    // console.log(evenlength)

    if (evenlength > input3) {
        console.log("Nice Array")
    } else  {
        console.log("Bad Array")
    }
    // console.log(input3)

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