
var arry = ["Apple", "Windows", "Linux", "Kindle", "Quiz"];
var some_var = arry.filter(function (el) {
    if (el.length % 2 == 1) {
        return (el)
    }
})
var newarry = some_var;
var product = function (p, e) {
    return (p + e);
}
var  arr_len = newarry.reduce(product);
console.log(arr_len.length);
