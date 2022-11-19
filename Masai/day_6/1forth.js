var arr = ["A", "Quick", "Brown", "Fox", "Jumps", "Over", "A", "Lazy", "Dog"]
var newarry = []

for (var i = 0; i < arr.length; i++) {
    if (arr[i].length >= 4) {
        newarry.push(arr[i])
    }
}
console.log(newarry)