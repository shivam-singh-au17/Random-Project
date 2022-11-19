var lower1 = "abcdefghijklmnopqrstuvwxyz";
var lower2 = "zyxwvutsrqponmlkjihgfedcba";
function toMirror(input) {
    for (var i = 0; i < lower2.length; i++) {
        if (lower2[i] === input) {
            return lower1[i];
        }
    }
    return input
}
// console.log(toLower("z"))

var word = "zyfqwxaeiou";
var output = "";
for (var i = 0; i < word.length; i++) {
    var lower_c = toMirror(word[i])
    output = output + lower_c;
}
console.log(output);