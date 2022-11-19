//  var count = 10;
//  while (count != 0) {
//      console.log("Masai School");
//      console.log(count);
//      count--
//  }



//  var count = 10;
//  var start = 1;
//  while (start <= count) {
//      console.log("Masai School");
//      console.log(start);
//      start++
//  }





// var limit = 10;
// var total = 0;
// for (var i = 1; i <= limit; i++) {
//     total = total + i;
//     // console.log(total);
// }
// var avrg = total / limit;
// console.log(avrg)




// var left = 3;
// var right = 5;
// for (var i = 1; i <= left; i++) {
//     for (var j = 1; j <= right; j++) {
//         console.log(i + "." + j);
//     }
// }



// var score = [10, 20, 30, 40, 44, 70, 50, 60, 60, 68]

// var highst = score[0]
// for (var i = 1; i < score.length; i++) {
//     if (score[i] > highst) {
//         highst = score[i]
//     }
// }
// console.log(highst);



var names = ["shivam", "singh", "saurabh"];
var count = 0;

for (var i = 0; i < names.length; i++) {
    for (var j = 0; j < names[i].length; j++) {
        if (names[i][j] == "a" || names[i][j] == "e" || names[i][j] == "i" || names[i][j] == "o" || names[i][j] == "u") {
            count++
        }
    }
}
console.log(count);





