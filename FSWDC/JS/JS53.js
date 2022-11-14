console.log("This is tutorial 53");

function greet(name, greetText = "Greetings from JavaScript") {
    let name1 = "Name1";
    console.log(greetText + " " + name);
    console.log(name + " is a good boy ");
}

function sum(a, b, c) {
    let d = a + b + c;
    return d;

    // THIS LINE NEVR EXECUTE (UNREACHABLE CODE)
    // console.log("Function is returned");
}


let name1 = "Shivam ji";
let name2 = "Saurabh";
let name3 = "Sonu";
let name4 = "Sohan";
let name5 = "Sundaram";
let greetText1 = "Good Morning";

greet(name1, greetText1);
greet(name2, greetText1);
greet(name3, greetText1);
greet(name4, greetText1);
greet(name5);

// UNDIFIND CODE
// let returnVel = greet(name1);
// console.log(returnVal);

let returnVel = sum(1, 2, 3);
console.log(returnVel);



// console.log(name1 + " is a good boy ");
// console.log(name2 + " is a good boy ");
// console.log(name3 + " is a good boy ");
// console.log(name4 + " is a good boy ");
// console.log(name5 + " is a good boy ");