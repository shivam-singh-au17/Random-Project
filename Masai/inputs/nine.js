function runProgram(input) {

    var input = input.trim().split(/[\r\n]+/);
    var newinput_0 = Number(input[0])
    var newinput = input[1].split(" ").map(Number);
    var cost = newinput_0 * (newinput[0] * 550 + newinput[1] * 240 + newinput[2] * 84 + newinput[3] * 159 + newinput[4] * 80 + newinput[5] * 160 + newinput[6] * 252);
    console.log(cost);

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