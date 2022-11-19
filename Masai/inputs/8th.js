function runProgram(input) {

    // var input = input.trim().split(/[\r\n]+/);
    // var input = input.trim().split(/[\r\n]+/).map(Number);

     // var input = input.trim().split(" ");
     var input = input.trim().split(" ").map(Number);

    // var d_num = [];
    for (var i = input[0]; i <= input[1].length; i++) { 
       if (input[1] / input[3] == num) {
          num .push(input[i]);
       }
    }
    console.log(num)

   
    // console.log(input)

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