
export function stringCalculator(string: string) {
    if (string === '') {
        return 0;
    }
    const numbers = string.split(',').map(Number);
    return numbers.reduce((sum, number) => sum + number);
}