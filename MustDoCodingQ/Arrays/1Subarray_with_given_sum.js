
function subarraySum(arr, n, s) {
    for (let i = 0; i < n; i++) {
        let res = ""
        let temp = 0;
        let myArr = []
        for (let j = i; j < n; j++) {
            temp += arr[j];
            myArr.push(arr[j])
            if (temp === s) {
                res = myArr[0], myArr[myArr.length - 1];
                console.log(myArr)
                break;
            }
        }
        console.log(res);
    }
}



function runProgram(input) {
    let newInput = input.split("\n");
    let lenAndSum = newInput[0].split(" ").map(Number);
    let n = lenAndSum[0];
    let s = lenAndSum[1];
    let arr = newInput[1].split(" ").map(Number);
    subarraySum(arr, n, s)
}


if (process.env.USERNAME === "Jay Mahakaal") {
    runProgram(`5 12
1 2 3 7 5`);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    var read = "";
    process.stdin.on("data", function (input) {
        read += input;
    });
    process.stdin.on("end", function () {
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);
    });
    process.on("SIGINT", function () {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
    });
}
