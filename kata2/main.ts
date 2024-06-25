export function stringCalculator(string: string) {
    if (string === '') {
        return 0;
    }
    if (string.length === 1) {
        return Number(string);
    }

    string = string.replace(/\n/g, ',');
    const numbers = string.split(',').map(Number);
    return numbers.reduce((acc, curr) => acc + curr, 0);
}