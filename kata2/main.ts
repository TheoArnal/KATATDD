export function stringCalculator(string: string) {
    if (!string) return 0;

    return string
        .replace(/\n/g, ',')
        .split(',')
        .map(Number)
        .reduce((acc, curr) => acc + curr, 0);
}