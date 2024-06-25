export function stringCalculator(string: string) {
    if (!string) return 0;

    if (string.endsWith(',') || string.endsWith('\n')) {
        throw new Error('error');
    }

    return string
        .replace(/\n/g, ',')
        .split(',')
        .map(Number)
        .reduce((acc, curr) => acc + curr, 0);
}