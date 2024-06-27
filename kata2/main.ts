export function stringCalculator(string: string) {
    if (!string) return 0;

    if (string.endsWith(',') || string.endsWith('\n')) {
        throw new Error('error');
    }

    if (string.startsWith('//')) {
        string = string.slice(4);
        return Number(string[0]) + Number(string[2])
    }


    return string
        .replace(/\n/g, ',')
        .split(',')
        .map(Number)
        .reduce((acc, curr) => acc + curr, 0);
}