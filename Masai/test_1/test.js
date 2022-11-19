
// var number = 7;
// var number = 41;
// var number = 16;
var number = 64;
var cnt = 0;
var i = 2

while (i < number) {
    if (number % i === 0) {
        console.log("Not prime number");
        break;
    }
    else {
        cnt++
    }
    i++
}
if (cnt + 2 === number) {
    console.log("Prime number")
}
