import {fizzBuzz} from "./main";

describe('fizzBuzz module', () => {
    test('should return 1 in string when given 1 in integer given', () => {
        expect(fizzBuzz(1)).toBe("1");
    });
    test('should return "Fizz" in string when mutiple of 3 integer given', () => {
        expect(fizzBuzz(3)).toBe("Fizz");
    });
    test('should return "Buzz" in string when mutiple of 5 integer given', () => {
        expect(fizzBuzz(5)).toBe("Buzz");
    });
});