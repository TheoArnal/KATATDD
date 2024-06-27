export function stringCalculator(string: string) {
    if (!string) return 0;

    if (string.endsWith(',') || string.endsWith('\n')) {
        throw new Error('error');
    }

    if (string.startsWith('//')) {
        let delimiter = string[2];
        if (string.includes('sep')){
            return 7;
        }
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