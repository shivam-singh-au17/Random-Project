var arry = ["apple", "windows", "ubuntu"];

var product = function (p, e) {
    return p  +"_" + e;
}
var num_prod = arry.reduce(product);
console.log(num_prod);







