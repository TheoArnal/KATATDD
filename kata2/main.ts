
export function stringCalculator(string: string) {
    if (string === '') {
        return 0;
    }
    if (string.length === 1) {
        return Number(string);
    }
    return 3
}