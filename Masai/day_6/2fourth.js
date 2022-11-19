var word = "hannah"
var newword = ""

for (var i = word.length - 1; i >= 0; i--) {
    newword = newword + word[i]
}

if (word === newword) {
    console.log("palindrome")
}
else {
    console.log("not a palindrome")
}
