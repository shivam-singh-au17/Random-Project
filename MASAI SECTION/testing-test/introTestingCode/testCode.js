
// test ( description, function )

function test(desc, func) {
    console.log(desc);
    func();
}


function expect(recievedValue) {

    function toBe(expectedValue) {
        if (recievedValue === expectedValue) {
            console.log("Test Case Passed");
        } else {
            console.log("Test Case Failed");
            console.log("Recieved Value:", recievedValue);
            console.log("Expected Value:", expectedValue);
        }
    }

    return { toBe }
}



test("Add 1 and 2, Sum should be 3", () => {
    expect(1 + 2).toBe(3)
});

const sum = (num1, num2) => {
    return num1 + num2;
}

const absDiff = (num1, num2) => {
    return Math.abs(num1 - num2);
}


test("Add 1 and 2, Sum should be 3", () => {
    expect(sum(1, 2)).toBe(3)
});

test("Abs diff 1 and 2, Sum should be 1", () => {
    expect(absDiff(1, 2)).toBe(1)
});