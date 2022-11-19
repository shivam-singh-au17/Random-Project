function runProgram(input) {

    var input = input.trim().split(" ").map(Number);
    var dis = input[1] 
   if (dis > 50) {
       console.log("Enough")
   } else{
       console.log("Go On")
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