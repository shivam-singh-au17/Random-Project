function runProgram(input) {

    var input = input.trim().split(/[\r\n]+/);
    var input1 = input[0].trim().split(" ").map(Number);
    // var input = input.trim().split(/[\r\n]+/).map(Number);

    // var input = input.trim().split(" ");
    // var input = input.trim().split(" ").map(Number);

    // if (input1[0] % 2 ==0 && input1[1] % 2 ==0) {
    // }
    var num1 = input1[0]
    var num2 = input1[1]
    var num3 = input1[2]
    // console.log(num1)


    var newarr = [];
    for (var i = num1; i <= num2; i++) {
        if (i % 2 == 0) {
            newarr.push(i)
        }
    }
    console.log(newarr)
 
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

