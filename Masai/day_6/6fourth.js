
var num = 11;
var count = 0;
var i = 2

while ( i < num) {
    if (num % i === 0) {
        console.log("Not prime");
        break;
    }
    else {
        count++
    }
    i++
}
if (count + 2 === num) {
    console.log("Prime")
}