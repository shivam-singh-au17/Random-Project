function runProgram(input) {

    // var input = input.trim().split(/[\r\n]+/);
    // var input = input.trim().split(/[\r\n]+/).map(Number);

    // var input = input.trim().split(" ");
    // var input = input.trim().split(" ").map(Number);


    var x = 32 / input
    if (x < -0) {
        console.log("Too Low")
    } else if (x == Infinity) {
        console.log("-1")
    }
    //  else if (x > 0){
    //     console.log(x)
    // }
    else if (x - 1 < x <= x) {
        console.log(x)
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