
const firstSeparator = ',';
const pipeSeparator = '|';
const thirdSeparator = ';';
const fourthSeparator = 'sep';

const delimiters = [firstSeparator, pipeSeparator, thirdSeparator, fourthSeparator];

export function stringCalculator(string: string) {
    if (!string) return 0;
    if (string.endsWith(firstSeparator) || string.endsWith('\n')) {
        throw new Error('error');
    }
    if (string.startsWith('//')) {
        string = string.slice(2)
        if(delimiters.some(delimiter => string.includes(delimiter))){
            let positionDelimiter = string.search(/[,|;|sep]/);
            if (string.includes(pipeSeparator) && string.includes(firstSeparator)){
                throw new Error(pipeSeparator +' expected but ' + firstSeparator + ' found at position' + string.indexOf(firstSeparator) + '.');
            }
            if (string.includes('sep')){
                let matchs = string.match(/\d+/g) || [];
                return matchs.map(Number).reduce((acc, curr) => acc + curr, 0);
            }
            let delimiter = string[positionDelimiter];
            string = string.slice(positionDelimiter)
            return string.split(delimiter).map(Number).reduce((acc, curr) => acc + curr, 0);
        }
    }
    return string
        .replace(/\n/g, firstSeparator)
        .split(firstSeparator)
        .map(Number)
        .reduce((acc, curr) => acc + curr, 0);
}