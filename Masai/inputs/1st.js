function runProgram(input) {

    // var input = input.trim().split(/[\r\n]+/);
    // var input = input.trim().split(/[\r\n]+/).map(Number);

    // var input = input.trim().split(" ");
    var input = input.trim().split(" ").map(Number);
    for (var i=0; i<input.length;i++){
        if (input % 35 == 0 ) {
            console.log("Masai Schol")
        } else if ( input % 5 == 0  ) {
            console.log("School")
        } else if (input % 7 == 0) {
            console.log("Masai")
        } else {
            console.log("Hurray!")
        }
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