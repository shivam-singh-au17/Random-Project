function runProgram(input) {
    var input = input.trim().split(" ").map(Number);
    var input1 = input[0]
    var amtOfUnit = input1 - 80;
    var totalUnit = 0;
    if (amtOfUnit <= 150) {
        totalUnit = amtOfUnit / 3;
        console.log(totalUnit);
    } else if (amtOfUnit <= 850) {
        totalUnit = amtOfUnit / 5;
        console.log(totalUnit);
    } else if (amtOfUnit > 850) {
        totalUnit = amtOfUnit / 10
        console.log(totalUnit);
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