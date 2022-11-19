var str = ["apple", "windows", "ubuntu", "cola", "system"];

var str1 = function (el) {
    return (el[0] === "a" || el[el.length - 1] === "a")
}

console.log(str.filter(str1));

