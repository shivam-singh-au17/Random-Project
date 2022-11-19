function runProgram(input) {

    var input = input.trim().split(/[\r\n]+/);
    // var input1 = input[0].trim().split(" ").map(Number);
    var input2 = input[1].trim().split(" ").map(Number);
    // var input = input.trim().split(/[\r\n]+/).map(Number);
    var prdt = 1;
    for (var i = 0; i < input2.length; i++) { 
        prdt =prdt * input2[i]
    
    }
    console.log(prdt)
    // console.log(input2[i])
    // var input = input.trim().split(" ");
    // var input = input.trim().split(" ").map(Number);

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