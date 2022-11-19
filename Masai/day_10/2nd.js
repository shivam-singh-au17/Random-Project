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








