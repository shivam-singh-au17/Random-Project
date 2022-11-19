function runProgram(input) {

    var input = input.trim().split(/[\r\n]+/);
    // var input = input.trim().split(/[\r\n]+/).map(Number);

    var price = input[0].trim().split(" ").map(Number);
    var qty = input[1].trim().split(" ").map(Number);

    var sum = 0;
    for (var i = 0; i < qty.length; i++) {
        sum = sum + price[i] * qty[i]
    }
    if (sum > 150000) {
        console.log("Not Possible")
    } else {
        console.log("Possible")
    }
    // var input = input.trim().split(" ");
    // var input = input.trim().split(" ").map(Number);

    // console.log(input);
    // console.log(sum);

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