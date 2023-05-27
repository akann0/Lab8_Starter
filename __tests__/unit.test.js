// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
// module.exports = { isPhoneNumber, isEmail, isStrongPassword, isDate, isHexColor };

test("are parentheses valid", () => {
    const testString = "(516) 641-6967";
    expect(functions.isPhoneNumber(testString)).toBe(true);
});

test("are no parentheses valid", () => {
    const testString = "516-641-6967";
    expect(functions.isPhoneNumber(testString)).toBe(true);
});

test("is no dash valid", () => {
    const testString = "516 641 6967";
    expect(functions.isPhoneNumber(testString)).toBe(false);
});

test("is no spacing valid", () => {
    const testString = "5166416967";
    expect(functions.isPhoneNumber(testString)).toBe(false);
});

//isEmail
test("is email valid", () => {
    const testString = "aaron@stevek.com";
    expect(functions.isEmail(testString)).toBe(true);
});

test("is email valid with two ats", () => {
    const testString = "aaron@stevek@gmail.com";
    expect(functions.isEmail(testString)).toBe(false);
});

test("is email valid with no at", () => {
    const testString = "aaronstevek.com";
    expect(functions.isEmail(testString)).toBe(false);
});

test("is email valid with .org", () => {
    const testString = "aaron@stevek.org";
    expect(functions.isEmail(testString)).toBe(true);
});

//isStrongPassword
test("is password valid", () => {
    const testString = "aaron";
    expect(functions.isStrongPassword(testString)).toBe(true);
});

test("is password valid with numbers", () => {
    const testString = "aaron123";
    expect(functions.isStrongPassword(testString)).toBe(true);
});

test("is password valid with empty string", () => {
    const testString = "";
    expect(functions.isStrongPassword(testString)).toBe(false);
});

test("is password valid with 15 characters", () => {
    const testString = "aaron_1234567890123";
    expect(functions.isStrongPassword(testString)).toBe(false);
});

//isDate
test("is date valid", () => {
    const testString = "09/11/2001";
    expect(functions.isDate(testString)).toBe(true);
});

test("is date valid with one digit month", () => {
    const testString = "9/11/2001";
    expect(functions.isDate(testString)).toBe(true);
});

test("is date valid with three digit day", () => {
    const testString = "09/001/2001";
    expect(functions.isDate(testString)).toBe(false);
});

test("is date valid with one digit year", () => {
    const testString = "9/1/1";
    expect(functions.isDate(testString)).toBe(false);
});

//isHexColor
test("is hex color valid", () => {
    const testString = "#000000";
    expect(functions.isHexColor(testString)).toBe(true);
});

test("is hex color valid with no #", () => {
    const testString = "000000";
    expect(functions.isHexColor(testString)).toBe(true);
});

test("is hex color valid with no characters", () => {
    const testString = "#";
    expect(functions.isHexColor(testString)).toBe(false);
});

test("is hex color valid with 9 characters", () => {
    const testString = "#000000000";
    expect(functions.isHexColor(testString)).toBe(false);
});

