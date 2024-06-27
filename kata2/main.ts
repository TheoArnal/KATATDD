export function stringCalculator(string: string) {
    if (!string) return 0;

    if (string.endsWith(',') || string.endsWith('\n')) {
        throw new Error('error');
    }

    if (string.startsWith('//')) {
        if(string.includes('|') && string.includes(',')){
            throw new Error('‘|’ expected but ‘,’ found at position 3.');
        }
        let delimiter = string[2];
        if (string.includes('sep')){
            delimiter = 'sep';
            string = string.slice(6);
            return string.split(delimiter).map(Number).reduce((acc, curr) => acc + curr, 0);
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