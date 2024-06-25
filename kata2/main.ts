
export function stringCalculator(string: string) {
    if (string === '') {
        return 0;
    }
    if (string.length === 1) {
        return Number(string);
    }
    const numbers = string.split(',').map(Number)
    return numbers[0] + numbers[1]
}