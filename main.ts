export function fizzBuzz(int: number) {
    if (int % 3 === 0) {
        return "Fizz";
    }
    return int.toString();
}