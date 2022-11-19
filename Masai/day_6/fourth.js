var num = 7;
num = num.toString()
var string = " "

for (var i = 0; i < num.length; i++) {
    if (num[i] === "0") {
        string = string + " Zero "
    }
    else if (num[i] === "1") {
        string = string + " One "
    }
    else if (num[i] === "2") {
        string = string + " Two "
    }
    else if (num[i] === "3") {
        string = string + " three "
    }
    else if (num[i] === "4") {
        string = string + " Four "
    }
    else if (num[i] === "5") {
        string = string + " Five "
    }
    else if (num[i] === "6") {
        string = string + " Six "
    }
    else if (num[i] === "7") {
        string = string + " Seven "
    }
    else if (num[i] === "8") {
        string = string + " Eight "
    }
    else if (num[i] === "9") {
        string = string + " Nine "
    }
}
console.log(string);