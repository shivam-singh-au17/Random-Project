var str = ["Masai", "School"];

// str.forEach(function(el){

//     if (el === "ABCDEFGHIJKLMNOPQRSTUVWXYZ") {
//         console.log("abcdefghijklmnopqrstuvwxyz");
//     }

// })


var str1 = function (el) {
    if (el === "ABCDEFGHIJKLMNOPQRSTUVWXYZ") {
        return "abcdefghijklmnopqrstuvwxyz";
    }
}

console.log(str.forEach(str1));