export function stringCalculator(string: string) {
    if (!string) return 0;

    if (string.endsWith(',') || string.endsWith('\n')) {
        throw new Error('error');
    }

    if (string.startsWith('//')) {
        const delimiter = string[2];
        string = string.slice(4);
        return string
            .split(delimiter)
            .map(Number)
            .reduce((acc, curr) => acc + curr, 0);

    }


    return string
        .replace(/\n/g, ',')
        .split(',')
        .map(Number)
        .reduce((acc, curr) => acc + curr, 0);
}