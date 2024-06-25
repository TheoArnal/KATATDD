export function fizzBuzz(int: number) {
    if (int % 3 === 0 && int % 5 === 0) {
        return "FizzBuzz";
    }
    if (int % 3 === 0) {
        return "Fizz";
    } else if (int % 5 === 0) {
        return "Buzz";
    } else {
        return int.toString();
    }
}