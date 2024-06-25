import {fizzBuzz} from "./main";

export const FizzValue = 3
export const BuzzValue = 5

describe('fizzBuzz module', () => {
    test('should return 1 in string when given 1 in integer given', () => {
        expect(fizzBuzz(1)).toBe("1");
    });
    test('should return "Fizz" in string when mutiple of 3 integer given', () => {
        expect(fizzBuzz(FizzValue)).toBe("Fizz");
    });
    test('should return "Buzz" in string when mutiple of 5 integer given', () => {
        expect(fizzBuzz(BuzzValue)).toBe("Buzz");
    });
    test('should return "FizzBuzz" in string when is mutiple of 3 and 5 integer given', () => {
        expect(fizzBuzz((FizzValue * BuzzValue))).toBe("FizzBuzz");
    });
});