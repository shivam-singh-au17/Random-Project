var limit = 20;
for (var i = 0; i < limit; i++) {
    console.log("Masai School");
}



var lim = 50;
var sum = 0;
for (var i = 0; i < lim; i++) {
    if (i % 3 == 0) {
        sum = sum + i
    }
}
console.log(sum);




var lim2 = 10;
var sum2 = 0;
while (lim2 != 0) {
    if (lim2 % 3 == 0) {
        sum2 = sum2 + lim2
    }
    lim2--
}
console.log(sum2);



var num = 3;
for (var i = 1; i <= num; i++) {
    for (var j = 1; j <= i; j++) {
        console.log(i + "." + j);
    }
}




var score = [12, 34, 21, 43, 9, 5, 23, 1, 64]
var low_s = score[0]
for (var i = 0; i < score.length; i++) {
    if (score[i] < low_s) {
        low_s = score[i]
    }
}
console.log(low_s);



var num = ["shivam", "singh", "saurabh"];
var tot_c = 0;
for (var i = 0; i < num.length; i++) {
    for (var j = 0; j < num[i].length; j++) {
        if (num[i][j] != "a" && num[i][j] != "e" && num[i][j] != "i" &&
            num[i][j] != "o" && num[i][j] != "u") {
            tot_c++
        }
    }
}
console.log(tot_c);