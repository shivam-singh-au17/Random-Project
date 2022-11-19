// 1

var string = "Masai School"
var obj = {}

for (var i = 0; i < string.length; i++) {
    if (string[i] !== " ") {
        if (obj[string[i]] === undefined) {
            obj[string[i]] = 1
        }
        else {
            obj[string[i]] = obj[string[i]] + 1
        }
    }
}
for (var key in obj) {
    console.log(key + " " + obj[key])
}

// 2


var input = "Shivam 23 Male"
input = input.split(" ")

var obj = {
    name: input[0],
    age: Number( input[1]),
    gender: input[2],
}

console.log("Name - " + obj.name);
console.log("Age - " + obj.age);
console.log("Gender - " + obj.gender);


// 3

var square = {
    length: 12,
    breadth: 8,
    parimeter: function () {
        return (2 * (this.length + this.breadth))
    },
    area: function () {
        return this.length * this.breadth
    }
}
console.log("Parimeter is = " + square.parimeter());
console.log("Area is = " + square.area());




// 4
var obj = {
    data: [1, 2, 3, 4, 5],
    lessThanItems: function (value) {
        var newArr = []
        for (var i = 0; i < this.data.length; i++) {
            if (value > this.data[i]) {
                newArr.push(this.data[i])
            }
        }
        return newArr
    },
    greaterThanItems: function (value) {
        var newArr = []
        for (var i = 0; i < this.data.length; i++) {
            if (value < this.data[i]) {
                newArr.push(this.data[i])
            }
        }
        return newArr
    },
}

console.log(obj.lessThanItems(4));
console.log(obj.greaterThanItems(4));


// 5


var obj = {
    item: "Random String",
    vowelsCount: function () {
        var count = 0

        for (var i = 0; i < this.item.length; i++) {
            if (this.item[i] == "a" || this.item[i] == "e" || this.item[i] == "o" || this.item[i] == "i" || this.item[i] == "u" || this.item[i] == "A" || this.item[i] == "E" || this.item[i] == "I" || this.item[i] == "O" || this.item[i] == "U") {
                count++
            }
        }
        return count
    },
    reverse: function () {
        var reversedString = ""
        for (var i = this.item.length - 1; i >= 0; i--) {
            reversedString = reversedString + this.item[i]
        }
        return reversedString
    },
    changeCase: function () {
        var lower = "abcdefghijklmnopqrstuvwxyz"
        var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        var newString = ""

        for (var i = 0; i < this.item.length; i++) {
            if (this.item[i] === " ") {
                newString = newString + " "
            }
            else {

                for (var j = 0; j < lower.length; j++) {
                    if (this.item[i] === lower[j]) {
                        newString = newString + upper[j]
                        break;
                    }
                    else if (this.item[i] === upper[j]) {
                        newString = newString + lower[j]
                        break;
                    }
                }
            }

        }
        return newString
    },
}
console.log(obj.changeCase());
console.log(obj.vowelsCount());
console.log(obj.reverse());


