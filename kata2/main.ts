
export function stringCalculator(string: string) {
    let sum = 0;
    if (string === '') {
        return 0;
    }
    if (string.length === 1) {
        return Number(string);
    }
    const numbers = string.split(',').map(Number)
    numbers.forEach(number => sum += number)
    return sum;
}