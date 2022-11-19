function runProgram(input) {

    var input = input.trim().split(/[\r\n]+/);
    var input1 = input[0].trim().split(",").map(Number);
    var input2 = input[1].trim().split(",").map(Number);
    var input3 = input[2].trim().split(",");
    var input3A = input3[0].trim().split(" ").map(Number);
    for (var i = 0; i < input3A.length; i++) {
     
    }
    console.log(input3A.length+1)


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