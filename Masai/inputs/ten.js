function runProgram(input) {

    var input = input.trim().split(/[\r\n]+/);
    var newinputA = input[1].split(" ").map(Number);
    var newinputB = input[2].split(" ").map(Number);
    var diffa1 = (newinputA[0] * 60 + newinputA[1])
    var diffa2 = (newinputA[2] * 60 + newinputA[3])
    var diffb1 = (newinputB[0] * 60 + newinputB[1])
    var diffb2 = (newinputB[2] * 60 + newinputB[3])
    if (diffa1 > diffa2) {
        diffaa1 = diffa1 - diffa2 
        console.log(diffaa1)
    } else if (diffa2 > diffa1) {
        diffaa2 = diffa2 - diffa1
        console.log(diffaa2)
    } 
     
     if (diffb1 > diffb2) {
        diffbb1 = diffb1 - diffb2
        console.log(diffbb1)
    } else if (diffb2 > diffb1) {
        diffbb2 = diffb2 - diffb1
        console.log(diffbb2)
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