var arry = ["apple", "windows", "ubuntu"];

newArry = arry.map(function(elm){
    return elm.length
})

var sumArry = function (p, e) {
    return p + e;
}
var num_prod = newArry.reduce(sumArry);
console.log(num_prod);
