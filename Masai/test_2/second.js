// Create a product object with some keys print all the keys along with their values

var product = {
    name: "Shivam Plus 6",
    price: 23222,
    color: "red",
    category: "Mobaile",
    screen: "7.4 inch"
}
for (key in product) {
    console.log(key + "---" + product[key])
}

// Given an array find the items that occur only once

var items = ['a', 'f', 'e', 'a', 'c', 'q', 'f', 'a'];
var items_obj = {}

for (var i = 0; i < items.length; i++) {
    var key = items[i];
    if (items_obj[key] == undefined) {
        items_obj[key] = 1;
    } else {
        var prev_count = items_obj[key];
        items_obj[key] = prev_count + 1;
    }
    // console.log(items_obj);
}

for (key in items_obj) {
    if (items_obj[key] == 1) {
        console.log(key)
    }
}

// Create a user object with array of address objects print all the pincodes of the addresses

var user = {
    name: "Shivam",
    addresses: [
        { city: " MZJP", pin: "281301", state: "UUP" },
        { city: " MZEP", pin: "291301", state: "UJP" },
        { city: " MZRP", pin: "241301", state: "JHUP" },
        { city: " MZTP", pin: "211301", state: "UHP" },
    ]
}

for (var i = 0; i < user.addresses.length; i++) {
    var adr = user.addresses[i];
    console.log(adr.pin);
}

// Create a square object with a method to calculate the perimenter of the square

var square = {
    side: 3,
    parimeter: function () {
        return this.side * 4
    }
}
console.log(square.parimeter())

// Create a user object with a marks key having an array of subject marks, with a method to add a new subject marks and also a method to calculate the lowest marks

var student = {
    name: "Shivam",
    marksList: [
        { sub: "Eng", mks: 10 },
        { sub: "Sci", mks: 5 },
    ],
    addMarks: function (s, m) {
        var item = { sub: s, mks: m };
        this.marksList.push(item);
    },
    leastMarks: function () {
        var least = {};
        for (var i = 0; i < this.marksList.length; i++) {
            if (least.mks == undefined || this.marksList[i].mks < least.mks) {
                least = this.marksList[i];
            }
        }
        return least;
    }
}
console.log(student.leastMarks());
student.addMarks("Math", 1);
console.log(student.marksList);

// Create a company object with some keys print all the keys along with their values

var company = {
    worker: "Shivam",
    address: "Mirzapur",
    C_name: "Masai School",
    product: "Education",
    sallery: 100000,
}
for (key in company) {
    console.log(key + " :- " + company[key])
}



// Given an array of items find the elements that occur more than once

var array = ['A', 'B', 'C', 'G', 'D', 'E', 'F', 'C', 'D', 'G'];
var array_obj = {}
for (var i = 0; i < array.length; i++) {
    var key = array[i];
    if (array_obj[key] == undefined) {
        array_obj[key] = 1;
    } else {
        var prev_count = array_obj[key];
        array_obj[key] = prev_count + 1;
    }
}
for (key in array_obj) {
    if (array_obj[key] >= 2) {
        console.log(key)
    }
}



// Create a user object with array of address objects print all the city names along with the pincodes of the addresses

var user = {
    name: "Shivam",
    addresses: [
        { city: " MZJP", pin: "281301", state: "UUP" },
        { city: " MZEP", pin: "291301", state: "UJP" },
        { city: " MZRP", pin: "241301", state: "JHUP" },
        { city: " MZTP", pin: "211301", state: "UHP" },
    ]
}
for (var i = 0; i < user.addresses.length; i++) {
    var adr = user.addresses[i];
    console.log("City Name = " + adr.city + ", Pin Code = " + adr.pin);
}



// Create a square object with two methods to calculate the perimenter and area of the square

var square = {
    side: 8,
    parimeter: function () {
        return this.side * 4
    },
    setSide: function (input) {
        this.side = input
    },
    area: function () {
        return this.side * this.side
    },
    setSide: function (input) {
        this.side = input
    },
}
console.log("Parimeter is = " + square.parimeter());
console.log("Area is = " + square.area());
square.setSide(5);
console.log("Area is = " + square.area());
square.setSide(7);
console.log("Parimeter is = " + square.parimeter());



// Create a user object with a marks key having an array of subject marks, with a method to add a new subject marks and also methods to calculate the lowest, highest and total marks

var A_boy = {
    name: "Shivam",
    mrkList: [
        { subject: "English", marks: 101 },
        { subject: "Science", marks: 70 },
        { subject: "Math", marks: 85 },
        { subject: "Hindi", marks: 90 },
    ],
    addMarks: function (B_nam, B_mrk) {
        var mark = { sub: B_nam, mks: B_mrk };
        this.mrkList.push(mark);
    },
    leastMarks: function () {
        var least = {};
        for (var i = 0; i < this.mrkList.length; i++) {
            if (least.mks == undefined || this.mrkList[i].mks < least.mks) {
                least = this.mrkList[i];
            }
        }
        return least;
    },
    highMarks: function () {
        var hig = this.mrkList[0];
        for (var i = 0; i < this.mrkList.length; i++) {
            var curr_sub = this.mrkList[i];
            if (curr_sub.mrkList > hig.mrkList) {
                hig = curr_sub;
            }
        }
        return hig
    },

    total: function () {
        var sum = 0;
        for (var i = 0; i < this.mrkList.length; i++) {
            var sum = this.mrkList[i];
            return sum
        }
    }
}
A_boy.total();

A_boy.addMarks("Art", 45);
console.log(A_boy.mrkList);
console.log(A_boy.leastMarks());
console.log(A_boy.highMarks());

// Given a string , calculate the occurrence of each and every character and print the output.



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


// Given an input of user Name, age and gender (seperated by spaces)
// Create a user objects with the keys name age and gender
// Print the output in the mentioned format using dot notation


var input = "Shivam 23 Male"
input = input.split(" ")

var obj = {
    name: input[0],
    age: Number(input[1]),
    gender: input[2],
}

console.log("Name - " + obj.name);
console.log("Age - " + obj.age);
console.log("Gender - " + obj.gender);

// Create an object with the properties length and breadth
// The object must have the methods area and perimeter which will calculate and prints the area and perimeter based on the length and breadth

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

// Create an object with a key call item having a string value
// Create the methods vowelsCount reverse changeCase
// The vowelsCount returns the count of vowels in the string
// The reverse returns the string in reverse order
// The changeCase flips the case lower to upper or upper to lower

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

// Create an object with has a array of numbers with the key data
// Create two methods lessThanItems and greaterThanItems both of them take a value as a parameter
// The lessThanItems returns all the elements in the array less than the provided value
// The greaterThanItems returns all the elements in the array greater than the provided value

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