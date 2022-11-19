var arry = [2, 4, 5, 3, 6, 8];
var some_variable = arry.filter(function (el,  i) {
    if (i % 2 == 0 && el % 2 == 0) {
        return el
    }
})
console.log(some_variable)