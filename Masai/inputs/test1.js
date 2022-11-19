function runProgram(input) {
    var input = input.trim().split(" ").map(Number);

    // console.log(input)
    // console.log(input[0])
    // console.log(input[1])

   if (input[1]*2 >= input[0]) {
       console.log("b")
   } else {
       console.log("g")
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