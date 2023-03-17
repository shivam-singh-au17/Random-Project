
const { expect } = require("@jest/globals");
let { sum, absDiff } = require("../index");

test("sum function is defined", () => {
    expect(sum).toBeDefined()
})

// ToBe

test("toBe for Number", () => {
    // == or ===
    expect(10).toBe(10)
})

test("toBe for Boolean", () => {
    expect(false).toBe(false)
    expect(true).toBe(true)
})

test("toBe for not Array", () => {
    expect([]).not.toBe([])
})

test("toBe for not Object", () => {
    expect({}).not.toBe({})
})

test("toBe for same Object", () => {
    let a = {}
    expect(a).toBe(a)
})

// ARRAY

test("array [] isEqual to []", () => {
    expect([]).toEqual([])
})

test("array a = [ 1, 2] isEqual to b = [ 1, 2]", () => {
    let a = [1, 2];
    let b = [1, 2];
    expect(a).toEqual(b)
})

test("array a = [ 1, 2] isEqual to b = [ 1, 2, 3]", () => {
    let a = [1, 2];
    let b = [1, 2, 3];
    expect(a).not.toEqual(b)
})

test("array a = [ 1, 2, 3] isEqual to b = [ 1, 2]", () => {
    let a = [1, 2, 3];
    let b = [1, 2];
    expect(a).toEqual(expect.arrayContaining(b))
})

test("array a = [ 1, 2] not isEqual to b = [ 1, 2, 3]", () => {
    let a = [1, 2];
    let b = [1, 2, 3];
    expect(a).not.toEqual(expect.arrayContaining(b))
})


// OBJECT

test("object check", () => {
    expect({ a: 1 }).toEqual({ a: 1 })
})

test("UserName, Email check", () => {
    let obj = { userName: "Shivam Singh", email: "shivam@gmail.com" }

    let out = {
        userName: expect.any(String), email: expect.stringContaining("shivam@gmail.com")
    }
    expect(obj).toEqual(out)
})

test("UserName contain", () => {
    let arr = ["shivam", "Singh", "Kumar"]
    expect(arr).toContain("Singh")
})


