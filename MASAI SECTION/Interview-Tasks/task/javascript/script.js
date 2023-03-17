let arr = [1, 2, 3, [4, 5, [6, 7]]];

let temp = String(arr);
let newArr = temp.split(",").map(Number)
console.log('newArr:', newArr)


