function runProgram(input) {
    var input = input.trim().split(" ").map(Number);
     var dis1 = input[0]
    var dis = input[1] * 40
   if (dis < dis1) {
       console.log("Apply Brake")
   } else if (dis > dis1){
       console.log("Keep Going")
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