import {BuzzValue, FizzValue} from "./main.test";

export function fizzBuzz(int: number) {
    if (int % FizzValue === 0 && int % BuzzValue === 0) {
        return "FizzBuzz";
    } else if (int % FizzValue === 0) {
        return "Fizz";
    } else if (int % BuzzValue === 0) {
        return "Buzz";
    } else {
        return int.toString();
    }
}