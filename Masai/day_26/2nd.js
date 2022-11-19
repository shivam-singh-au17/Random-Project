// Problem-1
// Given an array of numbers print the square of those numbers
var number = [9, 4, 6, 7];

number.forEach(function (el) {
    // console.log(el * el);
    console.log("square of " + el + " is " + el * el);
})

// Problem-2
// Given an array of numbers generate an array containing the double value of the numbers
// Sample Input [1, 2]
// Sample Output [2, 4]
var dubal = function (el) {
    return el * 2;
}

var double_number = number.map(dubal);
console.log(double_number);

// Problem-3
// Given an array of numbers extract the numbers which are odd
// Sample Input - [1,2,3]
// Sample Output - [1,3]

var odd = function (el) {
    return el % 2 == 1;
}
var odd_number = number.filter(odd);
console.log(odd_number);

// Problem-4
// Given an array of numbers print the product of all numbers
// Sample Input - [2,3,4]
// Sample Output - 24
var product = function (p, e) {
    return p * e;
}
var num_prod = number.reduce(product);
console.log(num_prod);

// Problem-5
// Given an array of numbers find the sum of odd elements
// Sample Input - [1, 2, 3, 4]
// Sample Output - 4
var sum = function (a, e) {
    return a + e;
}
var num_sum = number.reduce(sum);
console.log(num_sum);
var odd_sum = number.filter(odd).reduce(sum);
console.log(odd_sum);

// Problem-6
// Given an array of numbers find the sum of cubes if the number is divisible by 3
// Sample Input - [1, 2, 3, 4, 5, 6]
// Sample Output - 243 (27+216)

var multi_3 = function (el) {
    return (el % 3 == 0);
}
var cubes = function (el) {
    return el ** 3;
}

var multi_3_cub_sum = number.filter(multi_3).map(cubes).reduce(sum);

console.log(multi_3_cub_sum);



