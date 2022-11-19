// Problem-1
// Given an array of numbers print the square of those numbers

var arry = [2, 3, 4, 5, 6];

arry.forEach(function (el) {
    console.log(el * el);
})

// Problem-2
// Given an array of numbers generate an array containing the double value of the numbers
// Sample Input [1, 2]
// Sample Output [2, 4]

var dubal = function (el) {
    return el * 2;
}
console.log(arry.map(dubal));

// Problem-3
// Given an array of numbers extract the numbers which are odd
// Sample Input - [1,2,3]
// Sample Output - [1,3]

var odd = function (el) {
    return el % 2 == 1;
}
console.log(arry.filter(odd));

// Problem-4
// Given an array of numbers print the product of all numbers
// Sample Input - [2,3,4]
// Sample Output - 24

var prod = function (e, f) {
    return e * f;
}
console.log(arry.reduce(prod));

// Problem-5
// Given an array of numbers find the sum of odd elements
// Sample Input - [1, 2, 3, 4]
// Sample Output - 4

var sum = function (f, r) {
    return f + r;
}
console.log(arry.filter(odd).reduce(sum));

// Problem-6
// Given an array of numbers find the sum of cubes if the number is divisible by 3
// Sample Input - [1, 2, 3, 4, 5, 6]
// Sample Output - 243 (27+216)

var divby3 = function (el) {
    return el % 3 == 0;
}

var cube = function(el){
    return el*3
}
console.log(arry.filter(divby3).map(cube).reduce(sum));

